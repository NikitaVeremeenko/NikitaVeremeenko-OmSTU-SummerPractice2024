import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src="../src/img/Marvel_logo.png" alt="Marvel Logo" />
            <p>Data provided by Marvel. © {new Date().getFullYear()} MARVEL</p>
            <a href="https://developer.marvel.com">developer.marvel.com</a>
        </footer>
    );
};

export default Footer;