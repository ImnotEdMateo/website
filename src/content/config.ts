import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const owns = defineCollection({
  loader: file("src/content/webring-lists/owns.json"),
});

const friends = defineCollection({
  loader: file("src/content/webring-lists/friends.json"),
});

const coolSites = defineCollection({
  loader: file("src/content/webring-lists/cool-sites.json"),
});

const usefulInfo = defineCollection({
  loader: file("src/content/webring-lists/useful-info.json"),
});


export const collections = { owns, friends, coolSites, usefulInfo };
