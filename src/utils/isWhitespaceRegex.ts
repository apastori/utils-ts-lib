const WS_REGEX: RegExp = /^\s+$/

/**
 * Returns true if `src` is exactly one or more whitespace characters.
 */
export function isWhitespaceRegex(src: string): boolean {
  return WS_REGEX.test(src)
}
