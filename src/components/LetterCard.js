export default function LetterCard({ letter }) {
  return (
    <div className='mb-12 bg-background-200 rounded-[60px] lg:w-[348px] lg:h-[348px] sm:w-[288px] sm:h-[288px] w-[220px] h-[220px] lg:text-[170px] sm:text-[130px] text-[100px] shadow-cardShadow'>
    <span className='w-full h-full flex justify-center items-center'>
      { letter }
    </span>
  </div>
  )
}
