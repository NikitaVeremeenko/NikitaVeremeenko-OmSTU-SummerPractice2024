import React from 'react';
import { useParams } from 'react-router-dom';
import { characters } from '../mock/characters';
import { comics } from '../mock/comics';
import styles from '../styles/Details.module.scss';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';

const ComicDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Найдем нужный комикс по id
    const comic = comics.find(comic => comic.id.toString() === id);

    if (!comic) {
        return <div>Comic not found</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.details}>
                <div className={styles.item}>
                    <h2>{comic.title}</h2>
                    <p>{comic.description}</p>
                    <img src={comic.thumbnail} alt={comic.title} />
                </div>
                <div className={styles.item}>
                    <h3>Related Characters</h3>
                    <ul>
                        {characters.map(character => (
                            <li key={character.id}>
                                <a href={`/characters/${character.id}`}>
                                    {character.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ComicDetails;
