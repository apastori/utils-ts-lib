export function containsAlphabetic(str: string): boolean {
  for (const char of str) {
    if (char.toLowerCase() !== char.toUpperCase()) {
      return true
    }
  }
  return false
}
