import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

// https://web.dev/articles/add-manifest
// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = async () => {
  const config = await getEntry('config', 'site');
  const { favicons } = config!.data;
  const resolveAsset = (path: string) => {
    if (path.startsWith('http')) return path;
    return `${import.meta.env.BASE_URL}/${path}`.replace(/\/+/g, '/');
  };

  return new Response(
    JSON.stringify({
      name: "Wei's Website",
      icons: [
        {
          src: resolveAsset(favicons['android-chrome-192']),
          type: 'image/png',
          sizes: '192x192',
        },
        {
          src: resolveAsset(favicons['android-chrome-512']),
          type: 'image/png',
          sizes: '512x512',
        },
        {
          src: resolveAsset(favicons['512']),
          type: 'image/png',
          sizes: '512x512',
          purpose: 'maskable',
        },
      ],
      start_url: import.meta.env.BASE_URL,
      display: 'fullscreen',
      theme_color: '#15181a',
      background_color: '#f6f6f6',
    }),
  );
};
