import type { GuestbookEntry } from "./types";

// Lazy import para evitar que un fallo en astro:env rompa el módulo entero
async function getBaseUrl(): Promise<string> {
  const { GUESTBOOK_URL } = await import("astro:env/server");
  if (!GUESTBOOK_URL) throw new Error("GUESTBOOK_URL no está definida");
  return GUESTBOOK_URL;
}

export interface FetchEntriesParams {
  latest?: number;
  page?: number;
}

export async function fetchEntries(params: FetchEntriesParams = {}) {
  const latest = params.latest ?? 10;
  const page   = params.page   ?? 1;
  const base   = await getBaseUrl();

  const url = new URL(`${base}/entries`);
  url.searchParams.set("latest", String(latest));
  url.searchParams.set("page", String(page));

  const [entriesRes, pagesRes] = await Promise.all([
    fetch(url),
    fetch(`${base}/entries/pages?limit=${latest}`)
  ]);

  if (!entriesRes.ok) throw new Error(`Entries error: ${entriesRes.status}`);
  if (!pagesRes.ok)   throw new Error(`Pages error: ${pagesRes.status}`);

  return {
    entries: await entriesRes.json(),
    meta:    await pagesRes.json()
  };
}
