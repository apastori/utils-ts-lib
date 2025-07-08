import { isAlphanumericASCII } from './isAlphanumericASCII';

describe('isAlphanumericASCII', () => {
  it('should return true for a string with only ASCII alphanumeric characters', () => {
    expect(isAlphanumericASCII('abc')).toBe(true);
    expect(isAlphanumericASCII('HelloWorld')).toBe(true);
    expect(isAlphanumericASCII('abc123')).toBe(true);
    expect(isAlphanumericASCII('123')).toBe(true);
  });

  it('should return false for a string with non-ASCII alphanumeric characters', () => {
    expect(isAlphanumericASCII('abc!')).toBe(false);
    expect(isAlphanumericASCII('Hello World')).toBe(false);
    expect(isAlphanumericASCII('áéíóú')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphanumericASCII('')).toBe(false);
  });
});
