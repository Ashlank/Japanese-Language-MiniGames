import { Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-background-50 w-full h-screen flex flex-col gap-10 items-center pt-14">
      <h1 className='mb-4 text-2xl font-semibold'>Choose the game</h1>
      <Link to={"/guess"}>
        <Button text={"Guess Game"} />
      </Link>
      <Link to={"/write"}>
        <Button text={"Write Game"} />
      </Link>
      <Link to={"/memory"}>
        <Button text={"Memory Game"} />
      </Link>
    </div>
  );
}

export default App;
