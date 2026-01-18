-- Create table for quotes/cotizaciones
CREATE TABLE public.cotizaciones (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  empresa TEXT,
  correo TEXT NOT NULL,
  telefono TEXT,
  mensaje TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.cotizaciones ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert quotes (public form)
CREATE POLICY "Anyone can submit quotes"
ON public.cotizaciones
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_cotizaciones_updated_at
BEFORE UPDATE ON public.cotizaciones
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();