import { randomIndexes, shuffleArray } from "../utils/functions"

export function useIndexes(currentIndex, maxLength) {
  const uniqueIndexes = randomIndexes(currentIndex, maxLength)
  const shuffledIndexes = shuffleArray(uniqueIndexes)

  return shuffledIndexes
}