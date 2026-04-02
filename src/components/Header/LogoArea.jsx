import styles from './LogoArea.module.css';

function LogoArea() {
    return(
        <div className={styles.logoContainer}>
            <img src={`${import.meta.env.BASE_URL}logowithbackgroundcropped.png`} alt="The wedding story sl Logo" className={styles.mainlogo}/>

        </div>
    );
}

export default LogoArea;