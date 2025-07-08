const INTEGER: RegExp = /^-?\d+$/

export function isIntRegex(src: string): boolean {
  return INTEGER.test(src)
}
