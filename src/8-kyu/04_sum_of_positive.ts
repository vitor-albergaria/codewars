// https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr: number[]): number => {
  const filteredPositives = arr?.filter((num) => num > 0);

  const sumOfPositives = filteredPositives?.reduce(
    (prev, current) => prev + current,
    0
  );

  return sumOfPositives;
};
