export function randomIndexes(currIndex, maxIndex) {
  const indexes = [currIndex]
  let i = 0;
  while(i < 4) {
    let idx = Math.floor(Math.random() * maxIndex)
    while( indexes.includes(idx) ) {
      idx = Math.floor(Math.random() * maxIndex)
    }
    indexes.push(idx)
    i++
  }
  return indexes
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
