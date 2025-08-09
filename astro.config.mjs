import { defineConfig, envField } from 'astro/config';
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
  })],

  env: {
    schema: {
      PUBLIC_RADIO_URL: envField.string({ context: 'client', access: 'public'}),
      GUESTBOOK_URL: envField.string({ context: 'server', access: 'public'}),
    }
  }
});
