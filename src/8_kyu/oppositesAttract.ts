// Link: https://www.codewars.com/kata/555086d53eac039a2a000083/

export function lovefunc(flower1: number, flower2: number): boolean {
  return (
    (flower1 % 2 !== 0 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 !== 0)
  );
}
