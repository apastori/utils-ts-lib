import { containsAlphabeticRegex } from './containsAlphabeticRegex';

describe('containsAlphabeticRegex', () => {
  it('should return true for a string with alphabetic characters', () => {
    expect(containsAlphabeticRegex('abc')).toBe(true);
    expect(containsAlphabeticRegex('a1b2c3')).toBe(true);
    expect(containsAlphabeticRegex('Hello World')).toBe(true);
  });

  it('should return false for a string without alphabetic characters', () => {
    expect(containsAlphabeticRegex('123')).toBe(false);
    expect(containsAlphabeticRegex('!@#$%^&*()')).toBe(false);
    expect(containsAlphabeticRegex('')).toBe(false);
  });
});
