import type { Context, Config } from "@netlify/functions";

// Walidacja emaila
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async (req: Request, context: Context) => {
  // Tylko metoda POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    const { email, source, timestamp, honeypot } = body;

    // Honeypot check - jeśli wypełnione, to bot
    if (honeypot) {
      // Zwracamy sukces, żeby bot myślał że się udało
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Walidacja emaila
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!isValidEmail(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Pobranie URL webhooka ze zmiennych środowiskowych Netlify
    const webhookUrl = Netlify.env.get("MAKE_WEBHOOK_URL");

    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Pobranie API key ze zmiennych środowiskowych
    const apiKey = Netlify.env.get("MAKE_API_KEY");

    if (!apiKey) {
      console.error("MAKE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Wysłanie do Make.com z headerem autoryzacji
    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey,
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        source: source || "newsletter-popup",
        timestamp: timestamp || new Date().toISOString(),
      }),
    });

    if (!makeResponse.ok) {
      console.error("Make.com webhook failed:", makeResponse.status);
      return new Response(
        JSON.stringify({ error: "Failed to subscribe" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Newsletter function error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// Konfiguracja z wbudowanym rate limiting Netlify
export const config: Config = {
  path: "/api/newsletter",
  rateLimit: {
    windowLimit: 5,      // Max 5 requestów
    windowSize: 60,      // w ciągu 60 sekund
    aggregateBy: ["ip"], // Per IP
  },
};
