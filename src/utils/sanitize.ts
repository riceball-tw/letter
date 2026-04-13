import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks.
 * @param html The HTML content to sanitize.
 * @returns The sanitized HTML content.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}
