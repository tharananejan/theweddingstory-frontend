import Navbar from "./Navbar";
import LogoArea from "./LogoArea";
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.headerMain}>
            <div className={styles.navContainer}>
                <LogoArea />
                <Navbar />
            </div>
        </header>
    );
}

export default Header;