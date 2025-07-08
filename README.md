# utils-ts-lib

A collection of TypeScript utility functions for string and character manipulation.

## Utilities

This library provides a set of functions to check character properties, such as:

- `containsAlphabetic`: Checks if a string contains alphabetic characters.
- `containsAlphabeticASCII`: Checks if a string contains ASCII alphabetic characters.
- `containsAlphabeticRegex`: Checks if a string contains alphabetic characters using a regular expression.
- `isAlphabetic`: Checks if a character is alphabetic.
- `isAlphabeticASCII`: Checks if a character is an ASCII alphabetic character.
- `isAlphabeticRegex`: Checks if a character is alphabetic using a regular expression.
- `isAlphanumeric`: Checks if a character is alphanumeric.
- `isAlphanumericASCII`: Checks if a character is an ASCII alphanumeric character.
- `isAlphanumericRegex`: Checks if a character is alphanumeric using a regular expression.
- `isEOL`: Checks if a character is an End-Of-Line character.
- `isEOLASCII`: Checks if a character is an ASCII End-Of-Line character.
- `isEOLRegex`: Checks if a character is an End-Of-Line character using a regular expression.
- `isInt`: Checks if a character is an integer.
- `isIntASCII`: Checks if a character is an ASCII integer.
- `isIntRegex`: Checks if a character is an integer using a regular expression.
- `isQuote`: Checks if a character is a quote character.
- `isQuoteASCII`: Checks if a character is an ASCII quote character.
- `isQuoteRegex`: Checks if a character is a quote character using a regular expression.
- `isSkippable`: Checks if a character is skippable.
- `isWhitespace`: Checks if a character is a whitespace character.
- `isWhitespaceASCII`: Checks if a character is an ASCII whitespace character.
- `isWhitespaceRegex`: Checks if a character is a whitespace character using a regular expression.

## Installation

To install the library, use pnpm:

```bash
pnpm install
```

## Usage

```typescript
import { isAlphabetic } from 'utils-ts-lib';

console.log(isAlphabetic('a')); // true
console.log(isAlphabetic('1')); // false
```

## Running Tests

To run the tests, use the following command:

```bash
pnpm test
```

## Running the Application

To run the `index.js` file with Node, use the following command:

```bash
pnpm start
```
