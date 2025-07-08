import { isEOLRegex } from './isEOLRegex';

describe('isEOLRegex', () => {
  it('should return true for EOL characters', () => {
    expect(isEOLRegex('\n')).toBe(true);
    expect(isEOLRegex('\r\n')).toBe(true);
    expect(isEOLRegex('\r')).toBe(true);
  });

  it('should return false for non-EOL characters', () => {
    expect(isEOLRegex('a')).toBe(false);
    expect(isEOLRegex(' ')).toBe(false);
    expect(isEOLRegex('')).toBe(false);
  });
});
