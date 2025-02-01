import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  site: 'http://edmateo.site',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
