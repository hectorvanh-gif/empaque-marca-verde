-- Add explicit RLS policies to deny UPDATE and DELETE on cotizaciones
-- This makes security posture explicit and prevents accidental access if auth is added later

CREATE POLICY "Deny all updates on cotizaciones"
ON public.cotizaciones
FOR UPDATE
USING (false)
WITH CHECK (false);

CREATE POLICY "Deny all deletes on cotizaciones"
ON public.cotizaciones
FOR DELETE
USING (false);