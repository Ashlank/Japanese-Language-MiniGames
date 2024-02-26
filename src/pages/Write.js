import { useState, useRef } from 'react'
import data from '../mock/data.json'
import ResetScreen from "../components/ResetScreen"
import LetterCard from "../components/LetterCard"
import BackButton from '../components/BackButton'

export default function Write() {
  const [indexToGuess, setIndexToGuess] = useState(0)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const guess = e.currentTarget.children[0].value

    if(guess === data[indexToGuess].represents) {
      inputRef?.current.classList.add("animate-correct")
      setIndexToGuess( val => val + 1)
    } else {
      inputRef?.current.classList.add("animate-wrong")
    }
    e.currentTarget.children[0].value = ''
    setTimeout(() => {
      inputRef?.current?.classList?.remove("animate-wrong", "animate-correct")
    }, 100);
  }

  const handleReset = () => setIndexToGuess(0)

  if(indexToGuess >= data.length) return <ResetScreen handleReset={handleReset} />

  return (
    <div className='w-full flex flex-col items-center h-screen bg-background-50'>
      <BackButton />
      <h1 className='mb-16 text-2xl font-semibold'>Write Game</h1>
      <LetterCard letter={data[indexToGuess].letter} />
      <form
        className='w-full flex justify-center'
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type='text'
          placeholder='Guess the syllabary'
          className='indent-2 rounded-lg text-xl border-2 border-background-500 w-[90%] sm:w-[547px] h-[40px] focus-visible:outline-none'
        />
      </form>
    </div>
  )
}