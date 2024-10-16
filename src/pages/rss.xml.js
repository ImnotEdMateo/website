import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getPosts } from '../utils/getPosts.js'; 

export async function GET(context) {
  const posts = getPosts();

  const items = posts.map(post => ({
    link: `/post/${post.slug}`,
    title: post.title,
    pubDate: post.pubDate,
    description: post.description,
  }));

  return rss({
    title: 'Blog de Mateo',
    description: 'Si no te has dado cuenta, Mateo tiene un blog',
    site: context.site,
    items,
    customData: `<language>es-co</language>`,
  });
}
