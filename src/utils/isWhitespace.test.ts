import { isWhitespace } from './isWhitespace';

describe('isWhitespace', () => {
  it('should return true for whitespace characters', () => {
    expect(isWhitespace(' ')).toBe(true);
    expect(isWhitespace('\t')).toBe(true);
    expect(isWhitespace('\n')).toBe(true);
    expect(isWhitespace('\r')).toBe(true);
  });

  it('should return false for non-whitespace characters', () => {
    expect(isWhitespace('a')).toBe(false);
    expect(isWhitespace('1')).toBe(false);
    expect(isWhitespace('')).toBe(false);
  });
});
