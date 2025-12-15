import { z, defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

const blogCollection = defineCollection({
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
  blog: blogCollection,
  hommies, coolSites, usefulInfo, darknetSites,
};
