export function arrRange(start, end, name) {
  const arrLength = (end - start) + 1;
  
  return {
    options: [...Array(arrLength)].map((e, i) => i + start),
    name: name
  };
}


