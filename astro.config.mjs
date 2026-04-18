import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

// ENV In the Astro config file
// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
const { BASE_URL } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// Sanitize the BASE_URL from environment variables to ensure it starts and ends with a slash.
// This avoids double slashes or missing slashes which can cause build errors or invalid URLs.
// e.g., if BASE_URL is 'letter', finalBase becomes '/letter/'
const finalBase = BASE_URL
  ? `/${BASE_URL}/`.replace(/\/{2,}/g, '/')
  : '/';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': `${finalBase}${defaultLocale}/`,
    '/resume/': `${finalBase}${defaultLocale}/resume/`,
    '/work/': `${finalBase}${defaultLocale}/work/`,
    '/faq/': `${finalBase}${defaultLocale}/faq/`,
  },
  // Set the base URL for the site. Default is '/'.
  base: finalBase,
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
