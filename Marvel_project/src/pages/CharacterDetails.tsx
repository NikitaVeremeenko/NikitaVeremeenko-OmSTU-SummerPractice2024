import { useParams } from 'react-router-dom';
import { characters } from '../mock/characters';
import { comics } from '../mock/comics';
import styles from '../styles/Details.module.scss';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';

const CharacterDetails = () => {
    const { id } = useParams<{ id: string }>();
    const character = characters.find(char => char.id === parseInt(id));

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.details}>
                <div className={styles.item}>
                    <h2>{character.name}</h2>
                    <p>{character.description}</p>
                    <img src={character.thumbnail} alt={character.name} />
                </div>
                <div className={styles.item}>
                    <h3>Comics:</h3>
                    <ul>
                        {comics.map(comic => (
                            <li key={comic.id}>
                                <a href={`/comics/${comic.id}`}>{comic.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CharacterDetails;
