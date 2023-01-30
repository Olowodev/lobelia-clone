import Navbar from "../navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headCont}>
                <Navbar />
                <div className={styles.headContent}>
                    <video></video>
                    <video></video>
                    <h4>Earth observation to address the climate emergency.</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;