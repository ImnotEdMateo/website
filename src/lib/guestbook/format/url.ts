export function normalizeUrl(url: string): string | null {
  try {
    const u = new URL(url.startsWith("http") ? url : `http://${url}`);
    if (u.protocol === "http:" || u.protocol === "https:") {
      return u.href;
    }
  } catch {}

  return null;
}
