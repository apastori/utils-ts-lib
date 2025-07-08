const QUOTE: RegExp = /^['"]$/

export function isQuoteRegex(char: string): boolean {
  return QUOTE.test(char)
}
