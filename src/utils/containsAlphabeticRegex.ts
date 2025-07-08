const oneAlphabeticCharacter: RegExp = /[a-zA-Z]/

function containsAlphabeticRegex(str: string): boolean {
  return oneAlphabeticCharacter.test(str)
}

export { containsAlphabeticRegex }
