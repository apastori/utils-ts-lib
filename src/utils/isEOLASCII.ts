export function isEOLASCII(ch: string): boolean {
  // charCodeAt avoids the cost of string comparisons
  const code: number = ch.charCodeAt(0)
  return (
    code === 10 || // '\n'
    code === 13
  ) // '\r'
}
