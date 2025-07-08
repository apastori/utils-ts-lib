import { isWhitespaceRegex } from './isWhitespaceRegex';

describe('isWhitespaceRegex', () => {
  it('should return true for whitespace characters', () => {
    expect(isWhitespaceRegex(' ')).toBe(true);
    expect(isWhitespaceRegex('\t')).toBe(true);
    expect(isWhitespaceRegex('\n')).toBe(true);
    expect(isWhitespaceRegex('\r')).toBe(true);
    expect(isWhitespaceRegex(' \t\n\r')).toBe(true);
  });

  it('should return false for non-whitespace characters', () => {
    expect(isWhitespaceRegex('a')).toBe(false);
    expect(isWhitespaceRegex('1')).toBe(false);
    expect(isWhitespaceRegex('')).toBe(false);
  });
});
