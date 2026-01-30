-- Create enum for payment methods
CREATE TYPE public.payment_method AS ENUM ('pix', 'cartao', 'outro');

-- Add payment_method column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN payment_method public.payment_method;