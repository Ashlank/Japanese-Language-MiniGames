import { Link } from "react-router-dom"
import Button from "./Button"

export default function ResetScreen ({ handleReset }) {
  return(
    <div className='w-full h-screen flex flex-col items-center justify-center gap-8 bg-background-50'>
      <p className='text-xl font-semibold'>Congrats you finish the game!</p>
      <Button text={"Reset"} handleClick={handleReset} />
      <Link to={"/"}>
        <Button text={"Back to home"} />
      </Link>
    </div>
  )
}