import { containsAlphabetic } from './containsAlphabetic';

describe('containsAlphabetic', () => {
  it('should return true for a string with alphabetic characters', () => {
    expect(containsAlphabetic('abc')).toBe(true);
    expect(containsAlphabetic('a1b2c3')).toBe(true);
    expect(containsAlphabetic('Hello World')).toBe(true);
  });

  it('should return false for a string without alphabetic characters', () => {
    expect(containsAlphabetic('123')).toBe(false);
    expect(containsAlphabetic('!@#$%^&*()')).toBe(false);
    expect(containsAlphabetic('')).toBe(false);
  });
});
