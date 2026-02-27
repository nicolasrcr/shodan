import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      throw new Error('MERCADO_PAGO_ACCESS_TOKEN is not configured');
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Supabase configuration is missing');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const body = await req.json();
    console.log('Webhook received:', JSON.stringify(body, null, 2));

    if (body.type !== 'payment' && body.action !== 'payment.created' && body.action !== 'payment.updated') {
      console.log('Ignoring non-payment notification:', body.type || body.action);
      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const paymentId = body.data?.id;
    if (!paymentId) {
      console.log('No payment ID in notification');
      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Fetching payment details for ID:', paymentId);
    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    });

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text();
      console.error('Error fetching payment:', paymentResponse.status, errorText);
      throw new Error(`Failed to fetch payment: ${paymentResponse.status}`);
    }

    const payment = await paymentResponse.json();
    console.log('Payment details:', JSON.stringify(payment, null, 2));

    // Only process approved payments
    if (payment.status !== 'approved') {
      console.log('Payment not approved, status:', payment.status);
      return new Response(JSON.stringify({ received: true, status: payment.status }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse external reference
    let externalRef: { userId?: unknown; type?: unknown };
    try {
      externalRef = JSON.parse(payment.external_reference || '{}');
    } catch (e) {
      console.error('Error parsing external_reference:', e);
      return new Response(JSON.stringify({ received: true, error: 'Invalid format' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { userId, type } = externalRef;

    // Validate userId is a valid UUID
    if (!userId || typeof userId !== 'string') {
      console.error('Invalid or missing userId in external_reference');
      return new Response(JSON.stringify({ received: true, error: 'Invalid userId' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) {
      console.error('userId is not a valid UUID');
      return new Response(JSON.stringify({ received: true, error: 'Invalid userId format' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate type
    if (type !== 'new' && type !== 'renewal') {
      console.error('Invalid type in external_reference:', type);
      return new Response(JSON.stringify({ received: true, error: 'Invalid type' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Detect real payment method from MP response
    const paymentTypeId = payment.payment_type_id; // 'credit_card', 'debit_card', 'bank_transfer', 'ticket', etc.
    const paymentMethodId = payment.payment_method_id; // 'pix', 'visa', 'master', etc.
    
    let method: 'pix' | 'cartao' | 'outro' = 'outro';
    if (paymentMethodId === 'pix' || paymentTypeId === 'bank_transfer') {
      method = 'pix';
    } else if (['credit_card', 'debit_card', 'prepaid_card'].includes(paymentTypeId)) {
      method = 'cartao';
    }

    console.log(`Processing ${type} payment for user: ${userId}, method: ${method}`);

    // Get current profile
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('access_expires_at, has_paid')
      .eq('id', userId)
      .single();

    if (fetchError) {
      console.error('Error fetching profile:', fetchError);
      throw new Error(`Failed to fetch user profile: ${fetchError.message}`);
    }

    // Calculate new expiration date
    let newExpirationDate: Date;
    
    if (type === 'renewal' && profile.access_expires_at) {
      const currentExpiration = new Date(profile.access_expires_at);
      const now = new Date();
      const baseDate = currentExpiration > now ? currentExpiration : now;
      newExpirationDate = new Date(baseDate);
      newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    } else {
      newExpirationDate = new Date();
      newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    }

    // Update user profile
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        has_paid: true,
        access_expires_at: newExpirationDate.toISOString(),
        payment_method: method,
      })
      .eq('id', userId);

    if (updateError) {
      console.error('Error updating profile:', updateError);
      throw new Error(`Failed to update profile: ${updateError.message}`);
    }

    // Upsert payment record for audit
    const { error: paymentError } = await supabase
      .from('payments')
      .upsert({
        user_id: userId,
        mp_payment_id: String(paymentId),
        status: payment.status,
        method: method,
        amount: payment.transaction_amount,
        currency: payment.currency_id || 'BRL',
        raw: payment,
      }, { onConflict: 'mp_payment_id' });

    if (paymentError) {
      console.error('Error upserting payment record:', paymentError);
      // Don't throw - profile is already updated
    }

    console.log(`Successfully updated user ${userId} with expiration: ${newExpirationDate.toISOString()}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        userId, 
        type,
        method,
        newExpiration: newExpirationDate.toISOString() 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Webhook processing error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
