import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar