
-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Only authenticated users can read cotizaciones" ON public.cotizaciones;

-- Only admins can read quotes
CREATE POLICY "Only admins can read cotizaciones"
ON public.cotizaciones
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Also secure user_roles INSERT to prevent privilege escalation
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
