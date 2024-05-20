import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog de Mateo',
    description: 'Si no te has dado cuenta, Mateo tiene un blog',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./post/*.md')),
    customData: `<language>es-co</language>`,
  });
}
