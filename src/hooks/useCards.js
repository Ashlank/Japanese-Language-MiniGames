import { useState, useEffect } from "react"

const cardsAmount = [10, 20, 30]

export function useCards( data ) {
  // 0 - Fácil | 1 - Medio | 2 - Difícil
  const [cards, setCards] = useState([])
  const [difficulty, setDifficulty] = useState(0)
  const [activeCard, setActiveCard] = useState(null)
  const [remainings, setRemainings] = useState(cardsAmount[difficulty])

  const handleSetDifficulty = dif => setDifficulty(dif)
  const handleReset = () => {
    const cardsReady = getCards(data, cardsAmount[difficulty])
    setCards(cardsReady)
    setRemainings(cardsAmount[difficulty])
    setActiveCard(null)
  }

  const handleClick = (clickedCard) => {
    // Reveal clicked card -> to visible
    setCards( prev => prev.map(entry => {
      if(entry.id === clickedCard.id) {
        return {...entry, isVisible: true }
      }
      return {...entry}
    }))

    if(activeCard) {
      // Guess
      if(activeCard.equalId === clickedCard.equalId) {
        // Mark both cards as guessed
        setCards( prev => prev.map(entry => {
          if(entry.id === clickedCard.id || entry.id === activeCard.id) {
            return {...entry, isVisible: true, isGuessed: true }
          }
          return {...entry}
        }))
        setRemainings(prev => prev - 1)
      } else {
        // Hide both cards after 500ms, because they are wrong
        setTimeout(() =>
          setCards( prev => prev.map(entry => {
            if(entry.id === clickedCard.id || entry.id === activeCard.id) {
              console.log(activeCard)
              return {...entry, isVisible: false }
            }
            return {...entry}
          }))
        , 500)
      }
      setActiveCard(null)
    } else {
      setActiveCard(clickedCard)
    }
  }

  useEffect(() => {
    const cardsReady = getCards(data, cardsAmount[difficulty])
    setCards(cardsReady)
    setRemainings(cardsAmount[difficulty])

  }, [data, difficulty])

  return { cards, remainings, handleSetDifficulty, handleClick, handleReset }
}

function getCards(data, size) {
  const slicedCards = data.slice(0, size).map( entry => {
    return { ...entry, isVisible: false, isGuessed: false, equalId: entry.id}
  })

  const doubledCards = slicedCards.map( entry => {
    return { ...entry, id: 'double-' + entry.id}
  })

  slicedCards.push(...doubledCards)

  return slicedCards.sort(() => Math.random() - .5)
}