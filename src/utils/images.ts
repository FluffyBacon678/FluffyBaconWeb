// Returns the full URL to a file in the public/images/ directory.
// Works in both dev and GitHub Pages production (respects BASE_URL).
export function getImageUrl(filename: string): string {
  return `${import.meta.env.BASE_URL}images/${filename}`
}

// Returns the full URL to any file in the public/ directory.
export function getPublicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`
}
