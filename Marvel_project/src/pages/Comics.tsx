import React from 'react';
import Card from '../components/Card/Card';
import { comics } from '../mock/comics';
import styles from '../styles/App.module.scss';
import Header from '../components/Header/Header.tsx';
import SearchBar from '../components/SearchBar/SearchBar.tsx';
import Footer from '../components/Footer/Footer.tsx';

const Comics: React.FC = () => {
    return (
        <div>
            <Header />
            <SearchBar placeholder="Search comics by title" />

            <h1>Comics <span className={styles.counter}>({comics.length})</span></h1>
            <div className={styles.container}>
                {comics.map((comic) => (
                    <Card key={comic.id} item={comic} type="comics" />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Comics;