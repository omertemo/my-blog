/**
 * Prefixes public asset URLs with the configured Next.js base path when needed.
 */
export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (
    basePath &&
    (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`))
  ) {
    return normalizedPath;
  }
  return `${basePath}${normalizedPath}`;
}
