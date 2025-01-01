// Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

export const findNeedle = <T>(haystack: T[]): string => {
  const needlePosition = haystack?.findIndex((item) => item === 'needle');

  return `found the needle at position ${needlePosition}`;
};
