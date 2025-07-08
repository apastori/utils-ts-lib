export function isEOL(str: string): boolean {
  return str === '\n' || str === '\r\n' || str === '\r'
}
