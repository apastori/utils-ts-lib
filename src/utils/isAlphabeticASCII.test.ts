import { isAlphabeticASCII } from './isAlphabeticASCII';

describe('isAlphabeticASCII', () => {
  it('should return true for a string with only ASCII alphabetic characters', () => {
    expect(isAlphabeticASCII('abc')).toBe(true);
    expect(isAlphabeticASCII('HelloWorld')).toBe(true);
  });

  it('should return false for a string with non-ASCII alphabetic characters', () => {
    expect(isAlphabeticASCII('abc1')).toBe(false);
    expect(isAlphabeticASCII('Hello World')).toBe(false);
    expect(isAlphabeticASCII('áéíóú')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphabeticASCII('')).toBe(false);
  });
});
