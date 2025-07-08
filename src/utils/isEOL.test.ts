import { isEOL } from './isEOL';

describe('isEOL', () => {
  it('should return true for EOL characters', () => {
    expect(isEOL('\n')).toBe(true);
    expect(isEOL('\r\n')).toBe(true);
    expect(isEOL('\r')).toBe(true);
  });

  it('should return false for non-EOL characters', () => {
    expect(isEOL('a')).toBe(false);
    expect(isEOL(' ')).toBe(false);
    expect(isEOL('')).toBe(false);
  });
});
