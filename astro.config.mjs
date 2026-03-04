// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yrguativa.github.io',
  base: '/pegsApp/',

  build: {
    format: 'file'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});