import { isQuoteRegex } from './isQuoteRegex';

describe('isQuoteRegex', () => {
  it('should return true for a quote character', () => {
    expect(isQuoteRegex('"')).toBe(true);
    expect(isQuoteRegex("'")).toBe(true);
  });

  it('should return false for a non-quote character', () => {
    expect(isQuoteRegex('a')).toBe(false);
    expect(isQuoteRegex(' ')).toBe(false);
    expect(isQuoteRegex('')).toBe(false);
  });
});
