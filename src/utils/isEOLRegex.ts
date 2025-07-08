// Pre‑compile once when the module is evaluated
const EOL_REGEX: RegExp = /^(\r\n|\r|\n)$/

/**
 * Returns true if `seq` is exactly one EOL sequence:
 *  • Windows  (\r\n)
 *  • old Mac   (\r)
 *  • Unix/Linux (\n)
 */
export function isEOLRegex(src: string) {
  return EOL_REGEX.test(src)
}
