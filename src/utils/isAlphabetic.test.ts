import { isAlphabetic } from './isAlphabetic';

describe('isAlphabetic', () => {
  it('should return true for a single alphabetic character', () => {
    expect(isAlphabetic('a')).toBe(true);
    expect(isAlphabetic('Z')).toBe(true);
  });

  it('should return false for a non-alphabetic character', () => {
    expect(isAlphabetic('1')).toBe(false);
    expect(isAlphabetic('!')).toBe(false);
    expect(isAlphabetic(' ')).toBe(false);
  });

  it('should return false for a string with multiple characters', () => {
    expect(isAlphabetic('ab')).toBe(false);
    expect(isAlphabetic('a1')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAlphabetic('')).toBe(false);
  });
});
