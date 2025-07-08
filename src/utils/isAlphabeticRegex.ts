// Pre‑compile the regex once, at module‑scope, for best perf:
const ALPHA: RegExp = /^[A-Za-z]+$/

export function isAlphabeticRegex(src: string): boolean {
  return ALPHA.test(src)
}
