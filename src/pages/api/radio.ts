import type { APIRoute } from 'astro';
import { PUBLIC_RADIO_URL } from 'astro:env/client';

export const prerender = false;
let currentTitle = '';

export const GET: APIRoute = async () => {
  let interval: ReturnType<typeof setInterval>;

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      const fetchTitle = async () => {
        const res = await fetch(`https:${PUBLIC_RADIO_URL}/status-json.xsl`);
        const json = await res.json();
        return json?.icestats?.source?.title as string | undefined;
      };

      try {
        const title = await fetchTitle();
        if (title) {
          currentTitle = title;
          send(title);
        }
      } catch (err) {
        console.error(err);
      }

      interval = setInterval(async () => {
        try {
          const title = await fetchTitle();
          if (!title) return;
          if (title !== currentTitle) {
            currentTitle = title;
            send(title);
          }
        } catch (err) {
          console.error(err);
        }
      }, 5000);
    },

    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}; 
