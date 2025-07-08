import { isAlphanumericRegex } from './isAlphanumericRegex';

describe('isAlphanumericRegex', () => {
  it('should return true for a string with only alphanumeric characters', () => {
    expect(isAlphanumericRegex('abc')).toBe(true);
    expect(isAlphanumericRegex('HelloWorld')).toBe(true);
    expect(isAlphanumericRegex('abc123')).toBe(true);
    expect(isAlphanumericRegex('123')).toBe(true);
  });

  it('should return false for a string with non-alphanumeric characters', () => {
    expect(isAlphanumericRegex('abc!')).toBe(false);
    expect(isAlphanumericRegex('Hello World')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphanumericRegex('')).toBe(false);
  });
});
