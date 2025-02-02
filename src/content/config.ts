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

const defineWebringCollections = (path: string) => defineCollection({
  loader: file(`src/content/webring-lists/${path}.json`),
});

const owns = defineWebringCollections("owns");
const friends = defineWebringCollections("friends");
const coolSites = defineWebringCollections("cool-sites");
const usefulInfo = defineWebringCollections("useful-info");
const darknetSites = defineWebringCollections("darknet-sites");

const defineMusicCollections = (path: string) => defineCollection({
  loader: file(`src/content/radio-lists/${path}.json`),
});

const morning = defineMusicCollections("morning");
const afternoon = defineMusicCollections("afternoon");
const night = defineMusicCollections("night");
const lateNight = defineMusicCollections("lateNight");

export const collections = {
  blog: blogCollection,
  owns, friends, coolSites, usefulInfo, darknetSites,
  morning, afternoon, night, lateNight
};
