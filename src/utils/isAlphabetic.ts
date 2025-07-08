export function isAlphabetic(src: string): boolean {
  if (src.length !== 1) {
    return false;
  }
  return src.toUpperCase() !== src.toLowerCase();
}

