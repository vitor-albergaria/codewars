// Link: https://www.codewars.com/kata/515e271a311df0350d00000f

export function squareSum(numbersArr: number[]): number {
  return numbersArr.reduce((sum, number) => sum + number ** 2, 0);
}
