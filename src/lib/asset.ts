/**
 * Resolves a path from /public against the site's base URL.
 *
 * On GitHub Pages a project site is served from /<repo>/, so a hard-coded
 * "/resume.pdf" would 404. Vite rewrites such paths inside index.html, but not
 * strings that live in TypeScript — those go through here.
 *
 * External URLs (http, mailto, …) are returned untouched.
 */
export function asset(path: string): string {
  if (/^[a-z]+:/i.test(path) || path.startsWith("//")) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
