import type { APIRoute } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { fetchEntries } from "@/lib/guestbook/api";
import Entry from "@/components/guestbook/entry.astro";

export const GET: APIRoute = async ({ url }) => {
  const page   = Number(url.searchParams.get("page")   ?? "1");
  const latest = Number(url.searchParams.get("latest") ?? "20");

  const { entries, meta } = await fetchEntries({ latest, page });
  const container = await AstroContainer.create();

  const htmlFragments = await Promise.all(
    entries.map((entry) => container.renderToString(Entry, { props: { entry } }))
  );

  return new Response(
    JSON.stringify({ html: htmlFragments.join(""), meta }),
    { headers: { "Content-Type": "application/json" } }
  );
};
