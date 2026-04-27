import type { APIRoute } from "astro";
import { GUESTBOOK_URL, GUESTBOOK_API_KEY } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const response = await fetch(`${GUESTBOOK_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GUESTBOOK_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Error enviando entrada" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(null, { status: 201 });
};
