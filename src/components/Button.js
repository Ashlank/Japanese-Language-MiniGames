export default function Button({ text, handleClick = null }) {
  return (
    <button
      type='button'
      className='px-4 py-2 border-background-500 border-2 rounded-xl bg-background-200 font-semibold'
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
