import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import path from 'path';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://edmateo.site',
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },

  integrations: [expressiveCode({
    themes: ['gruvbox-dark-soft'],
    defaultLocale: 'es-ES'
  })]
});
