import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import path from 'path';

export default defineConfig({
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
  }
});
