import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const createCollection = (path: string) => defineCollection({
  loader: file(`src/content/webring-lists/${path}.json`),
});

const owns = createCollection("owns");
const friends = createCollection("friends");
const coolSites = createCollection("cool-sites");
const usefulInfo = createCollection("useful-info");

export const collections = { owns, friends, coolSites, usefulInfo };
