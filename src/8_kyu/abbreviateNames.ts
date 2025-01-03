// Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

export const abbrevName = (name: string): string => {
  const splittedName = name.split(' ');

  return `${splittedName[0][0].toUpperCase()}.${splittedName[1][0].toUpperCase()}`;
};
