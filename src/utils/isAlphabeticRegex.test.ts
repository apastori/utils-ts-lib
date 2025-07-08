import { isAlphabeticRegex } from './isAlphabeticRegex';

describe('isAlphabeticRegex', () => {
  it('should return true for a string with only alphabetic characters', () => {
    expect(isAlphabeticRegex('abc')).toBe(true);
    expect(isAlphabeticRegex('HelloWorld')).toBe(true);
  });

  it('should return false for a string with non-alphabetic characters', () => {
    expect(isAlphabeticRegex('abc1')).toBe(false);
    expect(isAlphabeticRegex('Hello World')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphabeticRegex('')).toBe(false);
  });
});
