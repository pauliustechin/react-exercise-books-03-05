import { NavLink } from "react-router"

const NavBar = () => {
  return (
    <nav className="flex gap-4 text-white font-bold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addbook">AddBook</NavLink>
    </nav>
  )
}

export default NavBar