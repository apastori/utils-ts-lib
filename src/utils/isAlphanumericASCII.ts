// ASCII code‑based (fast, minimal library use):
export function isAlphanumericASCII(src: string): boolean {
  if (src.length === 0) return false
  for (let i = 0; i < src.length; i++) {
    const code = src.charCodeAt(i)
    const isDigit = code >= 48 && code <= 57 // '0'–'9'
    const isUpper = code >= 65 && code <= 90 // 'A'–'Z'
    const isLower = code >= 97 && code <= 122 // 'a'–'z'
    if (!(isDigit || isUpper || isLower)) {
      return false
    }
  }
  return true
}
