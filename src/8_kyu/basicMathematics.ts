// Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7

export const basicOp = (
  operation: string,
  value1: number,
  value2: number
): number => {
  switch (operation) {
    case '*':
      return value1 * value2;

    case '/':
      return value1 / value2;

    case '-':
      return value1 - value2;

    case '+':
      return value1 + value2;

    default:
      throw new Error('Bad operation: ' + operation);
  }
};
