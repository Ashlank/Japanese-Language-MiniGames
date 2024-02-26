export default function MemoryCard({ card, handleClick }) {
  return (
    <div onClick={!card.isVisible ? () => handleClick(card) : null} className='cursor-pointer mb-12 bg-background-200 rounded-[15px] lg:w-[100px] lg:h-[100px] sm:w-[75px] sm:h-[75px] w-[50px] h-[50px] lg:text-[40px] sm:text-[25px] text-[20px] shadow-memoryCardShadow'>
      <span className='w-full h-full flex justify-center items-center'>
        {
          card.isVisible || card.isGuessed ? card.letter : ''
        }
      </span>
    </div>
  )
}
