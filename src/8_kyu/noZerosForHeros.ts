// Link: https://www.codewars.com/kata/570a6a46455d08ff8d001002

const removeTrailingZeros = (value: number) => {
  let hasTrailingZero = true;
  const digitsWithoutTrailingZeros: string[] = [];
  const reversedDigits = String(value).split('').reverse();

  for (let i = 0; i < reversedDigits.length; i++) {
    if (reversedDigits[i] !== '0') {
      hasTrailingZero = false;
    }

    if (!hasTrailingZero) {
      digitsWithoutTrailingZeros.push(reversedDigits[i]);
    }
  }

  return Number(digitsWithoutTrailingZeros.reverse().join(''));
};

export const noBoringZeros = (value: number): number => {
  return removeTrailingZeros(value);
};
