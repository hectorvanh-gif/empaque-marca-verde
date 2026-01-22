import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// In-memory rate limiting (resets on function restart)
const rateLimits = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 3; // max submissions per window
const WINDOW_MS = 60 * 60 * 1000; // 1 hour window

interface QuoteData {
  nombre: string;
  empresa?: string;
  correo: string;
  telefono?: string;
  mensaje: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    const now = Date.now();
    const rateData = rateLimits.get(clientIp);

    // Check rate limit
    if (rateData && rateData.resetAt > now) {
      if (rateData.count >= RATE_LIMIT) {
        console.log(`Rate limit exceeded for IP: ${clientIp}`);
        return new Response(
          JSON.stringify({ 
            error: "Demasiadas solicitudes. Por favor intenta más tarde.",
            code: "RATE_LIMITED"
          }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      rateData.count++;
    } else {
      rateLimits.set(clientIp, { count: 1, resetAt: now + WINDOW_MS });
    }

    // Parse and validate request body
    const data: QuoteData = await req.json();
    console.log("Received quote submission request");

    // Server-side validation
    if (!data.nombre || typeof data.nombre !== "string") {
      return new Response(
        JSON.stringify({ error: "El nombre es requerido", field: "nombre" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const trimmedNombre = data.nombre.trim();
    if (trimmedNombre.length < 1 || trimmedNombre.length > 100) {
      return new Response(
        JSON.stringify({ error: "El nombre debe tener entre 1 y 100 caracteres", field: "nombre" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!data.correo || typeof data.correo !== "string") {
      return new Response(
        JSON.stringify({ error: "El correo es requerido", field: "correo" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const trimmedCorreo = data.correo.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedCorreo) || trimmedCorreo.length > 255) {
      return new Response(
        JSON.stringify({ error: "Por favor ingresa un correo electrónico válido", field: "correo" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!data.mensaje || typeof data.mensaje !== "string") {
      return new Response(
        JSON.stringify({ error: "El mensaje es requerido", field: "mensaje" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const trimmedMensaje = data.mensaje.trim();
    if (trimmedMensaje.length < 1 || trimmedMensaje.length > 2000) {
      return new Response(
        JSON.stringify({ error: "El mensaje debe tener entre 1 y 2000 caracteres", field: "mensaje" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate optional fields
    const trimmedEmpresa = data.empresa?.trim() || null;
    if (trimmedEmpresa && trimmedEmpresa.length > 100) {
      return new Response(
        JSON.stringify({ error: "El nombre de empresa debe tener máximo 100 caracteres", field: "empresa" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const trimmedTelefono = data.telefono?.trim() || null;
    if (trimmedTelefono && trimmedTelefono.length > 20) {
      return new Response(
        JSON.stringify({ error: "El teléfono debe tener máximo 20 caracteres", field: "telefono" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert validated data
    const { error: insertError } = await supabase.from("cotizaciones").insert({
      nombre: trimmedNombre,
      empresa: trimmedEmpresa,
      correo: trimmedCorreo,
      telefono: trimmedTelefono,
      mensaje: trimmedMensaje,
    });

    if (insertError) {
      console.error("Database insert error:", insertError.message);
      return new Response(
        JSON.stringify({ error: "Error al guardar la solicitud. Por favor intenta de nuevo." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Quote successfully saved to database");

    return new Response(
      JSON.stringify({ success: true, message: "Cotización enviada correctamente" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});