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

const defineCollections = (listType: string, path: string) => defineCollection({
  loader: file(`src/content/${listType}-lists/${path}.json`),
});

// LINKS COLLECTIONS
const hommies = defineCollections("links", "hommies");
const coolSites = defineCollections("links", "coolSites");
const usefulInfo = defineCollections("links", "usefulInfo");
const darknetSites = defineCollections("links", "darknetSites");

export const collections = {
  blog,
  hommies, coolSites, usefulInfo, darknetSites
};
