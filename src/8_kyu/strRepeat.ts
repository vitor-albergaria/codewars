// Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

export const repeatStr = (repetitionTimes: number, value: string): string => {
  let repeatedStr = '';
  for (let i = 0; i < repetitionTimes; i++) repeatedStr += value;

  return repeatedStr;
};
