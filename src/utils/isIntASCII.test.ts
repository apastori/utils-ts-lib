import { isIntASCII } from './isIntASCII';

describe('isIntASCII', () => {
  it('should return true for an integer string', () => {
    expect(isIntASCII('123')).toBe(true);
    expect(isIntASCII('-123')).toBe(true);
    expect(isIntASCII('0')).toBe(true);
    expect(isIntASCII('+123')).toBe(true);
  });

  it('should return false for a non-integer string', () => {
    expect(isIntASCII('123.45')).toBe(false);
    expect(isIntASCII('abc')).toBe(false);
    expect(isIntASCII('123a')).toBe(false);
    expect(isIntASCII(' ')).toBe(false);
    expect(isIntASCII('')).toBe(false);
  });
});
