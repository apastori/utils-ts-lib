import { isEOLASCII } from './isEOLASCII'
import { isWhitespaceASCII } from './isWhitespaceASCII'
export function isSkippable(str: string): boolean {
  return isWhitespaceASCII(str) || isEOLASCII(str)
}
