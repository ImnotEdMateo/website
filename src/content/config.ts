import { z, defineCollection } from 'astro:content';
import { file } from "astro/loaders";

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
const owns = defineCollections("links", "owns");
const hommies = defineCollections("links", "hommies");
const coolSites = defineCollections("links", "cool-sites");
const usefulInfo = defineCollections("links", "useful-info");
const darknetSites = defineCollections("links", "darknet-sites");

// RADIO COLLECTIONS
const sunrise = defineCollections("radio", "sunrise");
const morning = defineCollections("radio", "morning");
const afternoon = defineCollections("radio", "afternoon");
const night = defineCollections("radio", "night");
const lateNight = defineCollections("radio", "lateNight");

export const collections = {
  blog: blogCollection,
  owns, hommies, coolSites, usefulInfo, darknetSites,
  sunrise, morning, afternoon, night, lateNight
};
