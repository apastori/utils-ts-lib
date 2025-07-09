export * from './utils/containsAlphabetic';
export * from './utils/containsAlphabeticASCII';
export * from './utils/containsAlphabeticRegex';
export * from './utils/isAlphabetic';
export * from './utils/isAlphabeticASCII';
export * from './utils/isAlphabeticRegex';
export * from './utils/isAlphanumeric';
export * from './utils/isAlphanumericASCII';
export * from './utils/isAlphanumericRegex';
export * from './utils/isEOL';
export * from './utils/isEOLASCII';
export * from './utils/isEOLRegex';
export * from './utils/isInt';
export * from './utils/isIntASCII';
export * from './utils/isIntRegex';
export * from './utils/isQuote';
export * from './utils/isQuoteASCII';
export * from './utils/isQuoteRegex';
export * from './utils/isSkippable';
export * from './utils/isWhitespace';
export * from './utils/isWhitespaceASCII';
export * from './utils/isWhitespaceRegex';

// Example Usage
import { containsAlphabetic } from './utils/containsAlphabetic';
import { containsAlphabeticASCII } from './utils/containsAlphabeticASCII';
import { containsAlphabeticRegex } from './utils/containsAlphabeticRegex';
import { isAlphabetic } from './utils/isAlphabetic';
import { isAlphabeticASCII } from './utils/isAlphabeticASCII';
import { isAlphabeticRegex } from './utils/isAlphabeticRegex';
import { isAlphanumeric } from './utils/isAlphanumeric';
import { isAlphanumericASCII } from './utils/isAlphanumericASCII';
import { isAlphanumericRegex } from './utils/isAlphanumericRegex';
import { isEOL } from './utils/isEOL';
import { isEOLASCII } from './utils/isEOLASCII';
import { isEOLRegex } from './utils/isEOLRegex';
import { isInt } from './utils/isInt';
import { isIntASCII } from './utils/isIntASCII';
import { isIntRegex } from './utils/isIntRegex';
import { isQuote } from './utils/isQuote';
import { isQuoteASCII } from './utils/isQuoteASCII';
import { isQuoteRegex } from './utils/isQuoteRegex';
import { isSkippable } from './utils/isSkippable';
import { isWhitespace } from './utils/isWhitespace';
import { isWhitespaceASCII } from './utils/isWhitespaceASCII';
import { isWhitespaceRegex } from './utils/isWhitespaceRegex';

console.log("\n--- Example Usage ---");

// containsAlphabetic
console.log("containsAlphabetic('Hello'):", containsAlphabetic('Hello')); // true
console.log("containsAlphabetic('123'):", containsAlphabetic('123')); // false

// containsAlphabeticASCII
console.log("containsAlphabeticASCII('Hello'):", containsAlphabeticASCII('Hello')); // true
console.log("containsAlphabeticASCII('123'):", containsAlphabeticASCII('123')); // false

// containsAlphabeticRegex
console.log("containsAlphabeticRegex('Hello'):", containsAlphabeticRegex('Hello')); // true
console.log("containsAlphabeticRegex('123'):", containsAlphabeticRegex('123')); // false

// isAlphabetic
console.log("isAlphabetic('a'):", isAlphabetic('a')); // true
console.log("isAlphabetic('1'):", isAlphabetic('1')); // false

// isAlphabeticASCII
console.log("isAlphabeticASCII('a'):", isAlphabeticASCII('a')); // true
console.log("isAlphabeticASCII('1'):", isAlphabeticASCII('1')); // false

// isAlphabeticRegex
console.log("isAlphabeticRegex('a'):", isAlphabeticRegex('a')); // true
console.log("isAlphabeticRegex('1'):", isAlphabeticRegex('1')); // false

// isAlphanumeric
console.log("isAlphanumeric('abc123'):", isAlphanumeric('abc123')); // true
console.log("isAlphanumeric('!'):", isAlphanumeric('!')); // false

// isAlphanumericASCII
console.log("isAlphanumericASCII('abc123'):", isAlphanumericASCII('abc123')); // true
console.log("isAlphanumericASCII('!'):", isAlphanumericASCII('!')); // false

// isAlphanumericRegex
console.log("isAlphanumericRegex('abc123'):", isAlphanumericRegex('abc123')); // true
console.log("isAlphanumericRegex('!'):", isAlphanumericRegex('!')); // false

// isEOL
console.log("isEOL('\n'):", isEOL('\n')); // true
console.log("isEOL('a'):", isEOL('a')); // false

// isEOLASCII
console.log("isEOLASCII('\n'):", isEOLASCII('\n')); // true
console.log("isEOLASCII('a'):", isEOLASCII('a')); // false

// isEOLRegex
console.log("isEOLRegex('\n'):", isEOLRegex('\n')); // true
console.log("isEOLRegex('a'):", isEOLRegex('a')); // false

// isInt
console.log("isInt('123'):", isInt('123')); // true
console.log("isInt('a'):", isInt('a')); // false

// isIntASCII
console.log("isIntASCII('123'):", isIntASCII('123')); // true
console.log("isIntASCII('a'):", isIntASCII('a')); // false

// isIntRegex
console.log("isIntRegex('123'):", isIntRegex('123')); // true
console.log("isIntRegex('a'):", isIntRegex('a')); // false

// isQuote
console.log("isQuote('\''):", isQuote("'")); // true
console.log("isQuote('a'):", isQuote('a')); // false

// isQuoteASCII
console.log("isQuoteASCII('\''):", isQuoteASCII("'")); // true
console.log("isQuoteASCII('a'):", isQuoteASCII('a')); // false

// isQuoteRegex
console.log("isQuoteRegex('\''):", isQuoteRegex("'")); // true
console.log("isQuoteRegex('a'):", isQuoteRegex('a')); // false

// isSkippable
console.log("isSkippable(' '):", isSkippable(' ')); // true
console.log("isSkippable('a'):", isSkippable('a')); // false

// isWhitespace
console.log("isWhitespace(' '):", isWhitespace(' ')); // true
console.log("isWhitespace('a'):", isWhitespace('a')); // false

// isWhitespaceASCII
console.log("isWhitespaceASCII(' '):", isWhitespaceASCII(' ')); // true
console.log("isWhitespaceASCII('a'):", isWhitespaceASCII('a')); // false

// isWhitespaceRegex
console.log("isWhitespaceRegex(' '):", isWhitespaceRegex(' ')); // true
console.log("isWhitespaceRegex('a'):", isWhitespaceRegex('a')); // false