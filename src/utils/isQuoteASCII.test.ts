import { isQuoteASCII } from './isQuoteASCII';

describe('isQuoteASCII', () => {
  it('should return true for a quote character', () => {
    expect(isQuoteASCII('"')).toBe(true);
    expect(isQuoteASCII("'")).toBe(true);
  });

  it('should return false for a non-quote character', () => {
    expect(isQuoteASCII('a')).toBe(false);
    expect(isQuoteASCII(' ')).toBe(false);
    expect(isQuoteASCII('')).toBe(false);
  });
});
