import { useState } from 'react';
import { NavLink } from "react-router-dom";
import menuIcon from '../../assets/menuicon.svg';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
        {/* Desktop Menu */}
        <div className={styles.navbarDesktop}>
            <ul className={styles.navbarLinks}>
                <li className={styles.navbarItem}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? styles.active : "")}>Services</NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")}>Contact</NavLink>
                </li>
            </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isOpen ? (
                <svg className={styles.iconClose} xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#111111">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            ) : (
                <img src={menuIcon} alt="Menu" className={styles.iconOpen} />
            )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.mobileLinks}>
                <li className={styles.navbarItemMobile}>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li className={styles.navbarItemMobile}>
                    <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>Services</NavLink>
                </li>
                <li className={styles.navbarItemMobile}>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
                </li>
                <li className={styles.navbarItemMobile}>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>Contact</NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar;