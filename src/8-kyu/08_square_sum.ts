// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers: number[]): number {
  const squareArr = numbers?.map((num) => num ** 2);

  return squareArr?.reduce((prev, curr) => prev + curr, 0);
}
