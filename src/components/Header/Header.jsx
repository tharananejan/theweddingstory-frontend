import Navbar from "./Navbar";
import LogoArea from "./LogoArea";
import styles from './Header.module.css';
function Header() {
    return (
        <div className={styles.headerMain}>
            <LogoArea />
            <Navbar />
        </div>
    );
}

export default Header;