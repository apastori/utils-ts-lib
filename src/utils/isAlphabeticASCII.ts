export function isAlphabeticASCII(src: string): boolean {
  if (src.length === 0) {
    return false;
  }
  for (let i: number = 0; i < src.length; i++) {
    const code: number = src.charCodeAt(i)
    if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
      return false
    }
  }
  return true
}
