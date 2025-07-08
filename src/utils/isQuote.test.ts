import { isQuote } from './isQuote';

describe('isQuote', () => {
  it('should return true for a quote character', () => {
    expect(isQuote('"')).toBe(true);
    expect(isQuote("'")).toBe(true);
  });

  it('should return false for a non-quote character', () => {
    expect(isQuote('a')).toBe(false);
    expect(isQuote(' ')).toBe(false);
    expect(isQuote('')).toBe(false);
  });
});
