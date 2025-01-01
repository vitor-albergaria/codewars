// Link: https://www.codewars.com/kata/5715eaedb436cf5606000381

export const positiveSum = (array: number[]): number => {
  let sum: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) sum += array[i];
  }

  return sum;
};
