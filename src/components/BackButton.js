import { Link } from "react-router-dom"

export default function BackButton() {
  return (
    <div className="self-start m-4">
      <Link to={"/"}>
        {"<- Back"}
      </Link>
    </div>
  )
}
