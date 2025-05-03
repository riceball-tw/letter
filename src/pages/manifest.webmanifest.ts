import type { APIRoute } from 'astro';
import { favicons } from '@/utility/config.ts';

// https://web.dev/articles/add-manifest
// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Wei's Website",
      icons: [
        { src: favicons['android-chrome-192'], type: 'image/png', sizes: '192x192' },
        { src: favicons['android-chrome-512'], type: 'image/png', sizes: '512x512' },
        { src: favicons['512'], type: 'image/png', sizes: '512x512', purpose: 'maskable' },
      ],
      start_url: '/',
      display: 'fullscreen',
      theme_color: '#15181a',
      background_color: '#f6f6f6',
    }),
  );
