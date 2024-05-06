import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Mateo | Blog',
    description: 'Blog de Mateo.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./post/*.md')),
    customData: `<language>es-co</language>`,
  });
}
