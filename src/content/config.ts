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

// WEBRING COLLECTIONS
const owns = defineCollections("webring", "owns");
const friends = defineCollections("webring", "friends");
const coolSites = defineCollections("webring", "cool-sites");
const usefulInfo = defineCollections("webring", "useful-info");
const darknetSites = defineCollections("webring", "darknet-sites");

// RADIO COLLECTIONS
const sunrise = defineCollections("radio", "sunrise");
const morning = defineCollections("radio", "morning");
const afternoon = defineCollections("radio", "afternoon");
const night = defineCollections("radio", "night");
const lateNight = defineCollections("radio", "lateNight");

export const collections = {
  blog: blogCollection,
  owns, friends, coolSites, usefulInfo, darknetSites,
  sunrise, morning, afternoon, night, lateNight
};
