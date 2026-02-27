import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      throw new Error('Unauthorized');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims?.sub) {
      throw new Error('Invalid token');
    }

    const authenticatedUserId = claimsData.claims.sub as string;

    // Fetch user profile server-side (never trust client data for payments)
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('email, name')
      .eq('id', authenticatedUserId)
      .single();

    if (profileError || !profile) {
      throw new Error('User not found');
    }

    const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      throw new Error('MERCADO_PAGO_ACCESS_TOKEN is not configured');
    }

    const { type, preferredMethod }: { type: 'new' | 'renewal'; preferredMethod?: 'pix' | 'cartao' } = await req.json();

    if (!type) {
      throw new Error('Missing required field: type');
    }

    const userId = authenticatedUserId;
    const userEmail = profile.email;
    const userName = profile.name;

    const isRenewal = type === 'renewal';
    const price = isRenewal ? 99.90 : 197.00;
    const title = isRenewal 
      ? 'Renovação Anual - Guia Exame Shodan' 
      : 'Guia Completo Exame Shodan - Acesso 1 Ano';
    const description = isRenewal
      ? 'Renovação do acesso ao curso por mais 12 meses'
      : 'Acesso completo ao curso preparatório para o Exame Shodan por 12 meses';

    const projectId = supabaseUrl.match(/https:\/\/([^.]+)/)?.[1] || '';
    const webhookUrl = `https://${projectId}.supabase.co/functions/v1/mercadopago-webhook`;
    
    const siteUrl = req.headers.get('origin') || 'https://shodanexame.lovable.app';
    const successUrl = `${siteUrl}/payment-success`;
    const failureUrl = `${siteUrl}/payment-failure`;
    const pendingUrl = `${siteUrl}/curso`;

    const excludedPaymentMethods: { id: string }[] = [];
    const excludedPaymentTypes: { id: string }[] = [];
    
    if (preferredMethod === 'pix') {
      excludedPaymentTypes.push(
        { id: 'credit_card' },
        { id: 'debit_card' },
        { id: 'prepaid_card' }
      );
    } else if (preferredMethod === 'cartao') {
      excludedPaymentTypes.push(
        { id: 'bank_transfer' },
        { id: 'ticket' }
      );
    }

    const preferenceData = {
      items: [
        {
          id: isRenewal ? 'renewal-1year' : 'course-full',
          title,
          description,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: price,
        },
      ],
      payer: {
        email: userEmail,
        name: userName,
      },
      payment_methods: {
        excluded_payment_methods: excludedPaymentMethods,
        excluded_payment_types: excludedPaymentTypes,
      },
      external_reference: JSON.stringify({ userId, type }),
      back_urls: {
        success: successUrl,
        failure: failureUrl,
        pending: pendingUrl,
      },
      auto_return: 'approved',
      notification_url: webhookUrl,
      statement_descriptor: 'EXAME SHODAN',
      expires: true,
      expiration_date_from: new Date().toISOString(),
      expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };

    console.log('Creating Mercado Pago preference for user:', userId);

    const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceData),
    });

    if (!mpResponse.ok) {
      const errorData = await mpResponse.text();
      console.error('Mercado Pago API error:', mpResponse.status, errorData);
      throw new Error(`Mercado Pago API error [${mpResponse.status}]: ${errorData}`);
    }

    const preference = await mpResponse.json();
    console.log('Preference created successfully:', preference.id);

    return new Response(
      JSON.stringify({
        success: true,
        preferenceId: preference.id,
        initPoint: preference.init_point,
        sandboxInitPoint: preference.sandbox_init_point,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error creating checkout:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const status = errorMessage === 'Unauthorized' || errorMessage === 'Invalid token' ? 401 : 500;
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
