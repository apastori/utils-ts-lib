// Pre‑compile the regex once, at module‑scope, for best perf:
const ALPHANUM: RegExp = /^[A-Za-z0-9]+$/
export function isAlphanumericRegex(src: string): boolean {
  return ALPHANUM.test(src)
}
