import NavBar from "./NavBar"
import { Link } from "react-router"

const Header = () => {
  return (
    <header className="flex justify-between p-10 bg-slate-700 shadow-lg rounded">
      <Link><h1 className="text-white font-bold text-2xl">Books</h1></Link>
      <NavBar />
    </header>
  )
}

export default Header