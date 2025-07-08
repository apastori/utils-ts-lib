import { isIntRegex } from './isIntRegex';

describe('isIntRegex', () => {
  it('should return true for an integer string', () => {
    expect(isIntRegex('123')).toBe(true);
    expect(isIntRegex('-123')).toBe(true);
    expect(isIntRegex('0')).toBe(true);
  });

  it('should return false for a non-integer string', () => {
    expect(isIntRegex('123.45')).toBe(false);
    expect(isIntRegex('abc')).toBe(false);
    expect(isIntRegex('123a')).toBe(false);
    expect(isIntRegex(' ')).toBe(false);
    expect(isIntRegex('')).toBe(false);
  });
});
