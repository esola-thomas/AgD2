import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://esola-thomas.github.io',
  base: '/AgD2/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
