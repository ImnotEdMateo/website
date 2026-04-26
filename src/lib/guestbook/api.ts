import type { GuestbookEntry } from "./types";
import { GUESTBOOK_URL } from "astro:env/server";

export async function fetchEntriesByRange(
  start: number,
  end: number
): Promise<GuestbookEntry[]> {
  const res = await fetch(`${GUESTBOOK_URL}/entry/${start}-${end}`);

  if (!res.ok) {
    throw new Error(`Error fetching entries: ${res.status}`);
  }

  return res.json();
}
