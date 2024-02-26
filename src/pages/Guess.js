import { useState } from 'react'
import data from '../mock/data.json'
import ResetScreen from '../components/ResetScreen'
import LetterCard from "../components/LetterCard"
import { useIndexes } from '../hooks/useIndexes'
import BackButton from '../components/BackButton'


export default function Guess() {
  const [indexToGuess, setIndexToGuess] = useState(0)
  const indexes = useIndexes(indexToGuess, data.length)

  const handleReset = () => setIndexToGuess(0)

  const handleClick = (e) => {
    const id = Number(e.currentTarget.dataset.id)
    if(id === indexToGuess) {
      setIndexToGuess(val => val + 1)
    }
  }

  if(indexToGuess >= data.length) return <ResetScreen handleReset={handleReset} />

  return (
    <div className='w-full flex flex-col items-center h-screen bg-background-50'>
      <BackButton />
      <h1 className='mb-16 text-2xl font-semibold'>Guess Game</h1>
      <LetterCard letter={data[indexToGuess].letter} />
      <div className='flex gap-4'>
        {
          indexes.map((index) => {
            return (
              <span
                key={index}
                data-id={index}
                className='w-[50px] bg-background-400 hover:bg-background-300 rounded-lg text-center cursor-pointer border-2 border-background-500'
                onClick={handleClick}
              >
                {data[index].represents}
              </span>
            )
          })
        }
      </div>
    </div>
  )
}

