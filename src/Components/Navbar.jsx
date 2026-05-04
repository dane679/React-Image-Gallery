import Logo from "../assets/Logo.jsx";
import { Link, NavLink  } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link
          to={`/`}
          viewTransition
        >
        <Logo className="logo-svg" />
        </Link>

        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} 
          viewTransition
        >
          About
        </NavLink>

      </nav>
    </>
  );
}
