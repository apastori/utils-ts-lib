// Most‑efficient ASCII check with no regex at all
export function isWhitespaceASCII(src: string): boolean {
  if (src.length === 0) {
    return false;
  }
  for (let i = 0; i < src.length; i++) {
    const code = src.charCodeAt(i);
    if (!(code === 32 || (code >= 9 && code <= 13))) {
      return false;
    }
  }
  return true;
}
