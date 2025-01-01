// Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

export const findSmallestInt = (args: number[]): number => {
  let smallestNumber = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallestNumber) smallestNumber = args[i];
  }

  return smallestNumber;
};
