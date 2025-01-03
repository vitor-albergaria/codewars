// Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

export const digitize = (n: number): number[] => {
  const reversedArr = n.toString().split('').reverse();

  return reversedArr.map((str) => Number(str));
};
