import { containsAlphabeticASCII } from './containsAlphabeticASCII';

describe('containsAlphabeticASCII', () => {
  it('should return true for a string with ASCII alphabetic characters', () => {
    expect(containsAlphabeticASCII('abc')).toBe(true);
    expect(containsAlphabeticASCII('a1b2c3')).toBe(true);
    expect(containsAlphabeticASCII('Hello World')).toBe(true);
  });

  it('should return false for a string without ASCII alphabetic characters', () => {
    expect(containsAlphabeticASCII('123')).toBe(false);
    expect(containsAlphabeticASCII('!@#$%^&*()')).toBe(false);
    expect(containsAlphabeticASCII('')).toBe(false);
    expect(containsAlphabeticASCII('áéíóú')).toBe(false);
  });
});
