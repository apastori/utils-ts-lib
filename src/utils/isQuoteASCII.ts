export function isQuoteASCII(char: string): boolean {
  const code = char.charCodeAt(0)
  return code === 34 || code === 39 // 34 = ", 39 = '
}
