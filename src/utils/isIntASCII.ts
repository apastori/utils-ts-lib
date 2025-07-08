export function isIntASCII(src: string): boolean {
  if (src.length === 0) {
    return false;
  }
  for (let i = 0; i < src.length; i++) {
    const charCode: number = src.charCodeAt(i);
    if (i === 0 && (charCode === 45 || charCode === 43)) { // Allow leading +/- 
        continue;
    }
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}
