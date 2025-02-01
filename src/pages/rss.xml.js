import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const sortedBlog = blog.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: 'edmateo.site',
    description: 'Por si no te has dado cuenta, EdMateo tiene un Blog',
    site: context.site,
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
  });
}
