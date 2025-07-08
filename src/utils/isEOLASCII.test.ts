import { isEOLASCII } from './isEOLASCII';

describe('isEOLASCII', () => {
  it('should return true for EOL characters', () => {
    expect(isEOLASCII('\n')).toBe(true);
    expect(isEOLASCII('\r')).toBe(true);
  });

  it('should return false for non-EOL characters', () => {
    expect(isEOLASCII('a')).toBe(false);
    expect(isEOLASCII(' ')).toBe(false);
    expect(isEOLASCII('')).toBe(false);
  });
});

