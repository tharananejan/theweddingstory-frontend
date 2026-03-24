import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar