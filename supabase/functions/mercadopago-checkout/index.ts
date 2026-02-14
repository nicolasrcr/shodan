import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CheckoutRequest {
  type: 'new' | 'renewal';
  userId: string;
  userEmail: string;
  userName: string;
  preferredMethod?: 'pix' | 'cartao';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      throw new Error('MERCADO_PAGO_ACCESS_TOKEN is not configured');
    }

    const { type, userId, userEmail, userName, preferredMethod }: CheckoutRequest = await req.json();

    if (!type || !userId || !userEmail) {
      throw new Error('Missing required fields: type, userId, userEmail');
    }

    const isRenewal = type === 'renewal';
    const price = isRenewal ? 99.90 : 197.00;
    const title = isRenewal 
      ? 'Renovação Anual - Guia Exame Shodan' 
      : 'Guia Completo Exame Shodan - Acesso 1 Ano';
    const description = isRenewal
      ? 'Renovação do acesso ao curso por mais 12 meses'
      : 'Acesso completo ao curso preparatório para o Exame Shodan por 12 meses';

    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const projectId = supabaseUrl.match(/https:\/\/([^.]+)/)?.[1] || '';
    const webhookUrl = `https://${projectId}.supabase.co/functions/v1/mercadopago-webhook`;
    
    const siteUrl = req.headers.get('origin') || 'https://shodanexame.lovable.app';
    const successUrl = `${siteUrl}/payment-success`;
    const failureUrl = `${siteUrl}/payment-failure`;
    const pendingUrl = `${siteUrl}/curso`;

    // Build excluded payment methods based on preference
    const excludedPaymentMethods: { id: string }[] = [];
    const excludedPaymentTypes: { id: string }[] = [];
    
    if (preferredMethod === 'pix') {
      // When PIX preferred, exclude card types but keep PIX available
      excludedPaymentTypes.push(
        { id: 'credit_card' },
        { id: 'debit_card' },
        { id: 'prepaid_card' }
      );
    } else if (preferredMethod === 'cartao') {
      // When card preferred, exclude bank transfer/PIX
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

    console.log('Creating Mercado Pago preference:', JSON.stringify(preferenceData, null, 2));

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
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
