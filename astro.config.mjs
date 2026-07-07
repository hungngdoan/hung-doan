import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://hungngdoan.github.io/hung-doan/
// If this ever moves to a custom domain, change `site` and set `base` to '/'.
export default defineConfig({
  site: 'https://hungngdoan.github.io',
  base: '/hung-doan',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi', en: 'en' },
      },
    }),
  ],
});
