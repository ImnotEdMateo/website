import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
  }),
});

const links = z.object({
  id: z.string(),
  url: z.string(),
  img: z.string().optional(),
  name: z.string(),
  desc: z.string(),
});

const defineLinkCollection = (listType: string, path: string) =>
  defineCollection({
    loader: file(`src/content/${listType}-lists/${path}.json`),
    schema: links,
  });

// LINKS COLLECTIONS
const hommies = defineLinkCollection('links', 'hommies');
const coolSites = defineLinkCollection('links', 'coolSites');
const usefulInfo = defineLinkCollection('links', 'usefulInfo');
const darknetSites = defineLinkCollection('links', 'darknetSites');

export const collections = {
  blog,
  hommies,
  coolSites,
  usefulInfo,
  darknetSites,
};
