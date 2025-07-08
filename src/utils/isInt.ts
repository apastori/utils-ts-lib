export function isInt(str: string): boolean {
  if (!str.trim()) return false
  const num: number = Number(str)
  // Check if it's a valid number and an integer
  return !Number.isNaN(num) && Number.isInteger(num)
}
