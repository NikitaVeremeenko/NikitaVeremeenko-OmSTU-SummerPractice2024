import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="../src/img/Marvel_logo.png" alt="Marvel Logo" />
            <nav>
                <NavLink to="/" activeClassName={styles.active}>Characters</NavLink>
                <NavLink to="/comics" activeClassName={styles.active}>Comics</NavLink>
            </nav>
        </header>

    );
};

export default Header;