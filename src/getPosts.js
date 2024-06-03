import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/pages/post');
  const postFiles = readdirSync(postsDirectory);

  const posts = postFiles.map(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: file.replace('.md', ''),
      pubDate: new Date(data.pubDate),
    };
  });

  posts.sort((a, b) => b.pubDate - a.pubDate);
  return posts;
}
