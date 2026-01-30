-- Add access_expires_at column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN access_expires_at TIMESTAMP WITH TIME ZONE;

-- Set default expiration for existing users (1 year from created_at)
UPDATE public.profiles 
SET access_expires_at = created_at + INTERVAL '1 year'
WHERE access_expires_at IS NULL;

-- Create trigger to set access_expires_at on new user creation
CREATE OR REPLACE FUNCTION public.set_default_access_expiration()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.access_expires_at IS NULL THEN
    NEW.access_expires_at = NEW.created_at + INTERVAL '1 year';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER set_access_expiration_on_insert
BEFORE INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.set_default_access_expiration();