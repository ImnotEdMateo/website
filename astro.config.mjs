import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: "https://edmateo.site",
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['github-light', 'catppuccin-mocha'],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: 'none',
        },
      },
    }),
    mdx(),
  ],
});
