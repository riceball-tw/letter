/**
 * Resolve asset path with base URL
 * @param path The asset path
 * @returns The resolved asset path with base URL
 * @example resolveAsset('/assets/logo.svg') => '/base/assets/logo.svg'
 */
// eslint-disable-next-line import/prefer-default-export
export function resolveAsset(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path}`.replace(/\/+/g, '/');
}
