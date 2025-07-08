import { isSkippable } from './isSkippable';

describe('isSkippable', () => {
  it('should return true for whitespace characters', () => {
    expect(isSkippable(' ')).toBe(true);
    expect(isSkippable('\t')).toBe(true);
  });

  it('should return true for EOL characters', () => {
    expect(isSkippable('\n')).toBe(true);
    expect(isSkippable('\r')).toBe(true);
  });

  it('should return false for non-skippable characters', () => {
    expect(isSkippable('a')).toBe(false);
    expect(isSkippable('1')).toBe(false);
    expect(isSkippable('')).toBe(false);
  });
});