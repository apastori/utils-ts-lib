import { isInt } from './isInt';

describe('isInt', () => {
  it('should return true for an integer string', () => {
    expect(isInt('123')).toBe(true);
    expect(isInt('-123')).toBe(true);
    expect(isInt('0')).toBe(true);
  });

  it('should return false for a non-integer string', () => {
    expect(isInt('123.45')).toBe(false);
    expect(isInt('abc')).toBe(false);
    expect(isInt('123a')).toBe(false);
    expect(isInt(' ')).toBe(false);
    expect(isInt('')).toBe(false);
  });
});
