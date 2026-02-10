
-- Drop the overly restrictive deny-all policies for admins
DROP POLICY IF EXISTS "Deny all updates on cotizaciones" ON public.cotizaciones;
DROP POLICY IF EXISTS "Deny all deletes on cotizaciones" ON public.cotizaciones;

-- Allow admins to update cotizaciones (e.g. change status)
CREATE POLICY "Admins can update cotizaciones"
ON public.cotizaciones
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to delete cotizaciones
CREATE POLICY "Admins can delete cotizaciones"
ON public.cotizaciones
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
