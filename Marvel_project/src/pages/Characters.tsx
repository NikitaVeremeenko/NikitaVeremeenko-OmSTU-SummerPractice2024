import React from 'react';
import Card from '../components/Card/Card';
import { characters } from '../mock/characters';
import styles from '../styles/App.module.scss';
import Header from '../components/Header/Header.tsx';
import SearchBar from '../components/SearchBar/SearchBar.tsx';
import Footer from '../components/Footer/Footer.tsx';
const Characters: React.FC = () => {
    return (
        <div>
            <Header />
            <SearchBar placeholder="Search characters by name" />

            <h1>Characters <span className={styles.counter}>({characters.length})</span></h1>
            <div className={styles.container}>
                {characters.map((character) => (
                    <Card key={character.id} item={character} type="characters" />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Characters;