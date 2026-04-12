import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

// ENV In the Astro config file
// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
const { BASE_URL } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': `/${BASE_URL}${defaultLocale}/`,
    '/resume/': `/${BASE_URL}${defaultLocale}/resume/`,
    '/work/': `/${BASE_URL}${defaultLocale}/work/`,
    '/faq/': `/${BASE_URL}${defaultLocale}/faq/`,
  },
  ...(BASE_URL ? { base: BASE_URL } : {}),
  prefetch: {
    prefetchAll: true,
  },
  // !IMPORTANT: Set site url property with your own domain
  site: 'https://riceball-tw.github.io',
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
