// Link: https://www.codewars.com/kata/56dec885c54a926dcd001095

export class Kata {
  static opposite(value: number) {
    return value < 0 ? Math.abs(value) : value * -1;
  }
}

console.log(Kata.opposite(-12525220.3325));
