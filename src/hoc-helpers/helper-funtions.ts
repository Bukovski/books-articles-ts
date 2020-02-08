interface IArrRange {
  options: number[],
  name: string
}

export function arrRange(start: number, end: number, name: string): IArrRange {
  const arrLength = (end - start) + 1;
  
  return {
    options: [...Array(arrLength)].map((e, i) => i + start),
    name: name
  };
}
