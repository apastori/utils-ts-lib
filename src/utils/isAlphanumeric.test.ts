import { isAlphanumeric } from './isAlphanumeric';

describe('isAlphanumeric', () => {
  it('should return true for a string with only alphanumeric characters', () => {
    expect(isAlphanumeric('abc')).toBe(true);
    expect(isAlphanumeric('HelloWorld')).toBe(true);
    expect(isAlphanumeric('abc123')).toBe(true);
    expect(isAlphanumeric('123')).toBe(true);
  });

  it('should return false for a string with non-alphanumeric characters', () => {
    expect(isAlphanumeric('abc!')).toBe(false);
    expect(isAlphanumeric('Hello World')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphanumeric('')).toBe(false);
  });
});
