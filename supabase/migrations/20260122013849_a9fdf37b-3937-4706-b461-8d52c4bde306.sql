-- 1. Add SELECT deny policy to protect customer data
CREATE POLICY "Deny public select on cotizaciones"
ON public.cotizaciones
FOR SELECT
USING (false);

-- 2. Add check constraints for input validation at database level
ALTER TABLE public.cotizaciones
ADD CONSTRAINT nombre_length CHECK (
  char_length(nombre) >= 1 AND char_length(nombre) <= 100
),
ADD CONSTRAINT correo_format CHECK (
  correo ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
),
ADD CONSTRAINT correo_length CHECK (
  char_length(correo) <= 255
),
ADD CONSTRAINT telefono_length CHECK (
  telefono IS NULL OR char_length(telefono) <= 20
),
ADD CONSTRAINT empresa_length CHECK (
  empresa IS NULL OR char_length(empresa) <= 100
),
ADD CONSTRAINT mensaje_length CHECK (
  char_length(mensaje) >= 1 AND char_length(mensaje) <= 2000
);