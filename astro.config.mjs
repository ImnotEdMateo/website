import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: "https://edmateo.site",
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['everforest-dark'],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: 'none',
        },
      },
    }),
    mdx(),
  ],
});
