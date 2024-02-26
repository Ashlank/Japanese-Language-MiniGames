import data from '../mock/data.json'
import ResetScreen from "../components/ResetScreen"
import MemoryCard from "../components/MemoryCard"
import Button from '../components/Button'
import { useCards } from "../hooks/useCards"
import BackButton from '../components/BackButton'

export default function Memory() {
  const { cards, remainings, handleSetDifficulty, handleClick, handleReset} = useCards(data)

  if(remainings === 0) return <ResetScreen handleReset={handleReset} />

  return (
    <div className='w-full flex flex-col items-center min-h-screen bg-background-50'>
      <BackButton />
      <h1 className='mb-4 text-2xl font-semibold'>Memory Game</h1>
      <div className='flex gap-4 my-6'>
        {/* 0 - Fácil | 1 - Medio | 2 - Difícil */}
        <Button text={'Easy'} handleClick={() => handleSetDifficulty(0)} />
        <Button text={'Medium'} handleClick={() => handleSetDifficulty(1)} />
        <Button text={'Hard'} handleClick={() => handleSetDifficulty(2)} />
      </div>
      <div className="flex gap-4 flex-wrap m-2 justify-center">
        {
          cards.map( (obj, index) => {
            return (
              <MemoryCard card={obj} handleClick={handleClick} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}
