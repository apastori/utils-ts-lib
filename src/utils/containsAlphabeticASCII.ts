export function containsAlphabeticASCII(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    ) {
      return true
    }
  }
  return false
}
