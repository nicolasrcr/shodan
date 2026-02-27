-- Add admin UPDATE policy for user_sessions so admins can revoke sessions
CREATE POLICY "Admins can update any session"
ON public.user_sessions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));