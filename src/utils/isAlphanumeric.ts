// Native (no regex, no char‑codes—uses String and Number APIs):
export function isAlphanumeric(src: string): boolean {
  if (src.length === 0) return false
  return src.split('').every((ch: string) => {
    const code = ch.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    );
  });
}
