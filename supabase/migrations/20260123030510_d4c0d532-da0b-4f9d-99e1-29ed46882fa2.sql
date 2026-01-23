-- Drop the existing admin-only policy
DROP POLICY IF EXISTS "Admins can read cotizaciones" ON public.cotizaciones;

-- Create new policy for all authenticated users
CREATE POLICY "Only authenticated users can read cotizaciones"
ON public.cotizaciones
FOR SELECT
TO authenticated
USING (true);