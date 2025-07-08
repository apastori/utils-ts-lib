import { isWhitespaceASCII } from './isWhitespaceASCII';

describe('isWhitespaceASCII', () => {
  it('should return true for ASCII whitespace characters', () => {
    expect(isWhitespaceASCII(' ')).toBe(true);
    expect(isWhitespaceASCII('\t')).toBe(true);
    expect(isWhitespaceASCII('\n')).toBe(true);
    expect(isWhitespaceASCII('\r')).toBe(true);
    expect(isWhitespaceASCII(' \t\n\r')).toBe(true);
  });

  it('should return false for non-ASCII whitespace characters', () => {
    expect(isWhitespaceASCII('a')).toBe(false);
    expect(isWhitespaceASCII('1')).toBe(false);
    expect(isWhitespaceASCII('')).toBe(false);
    expect(isWhitespaceASCII('\u00A0')).toBe(false); // Non-breaking space
  });
});