import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

interface CardProps {
    item: {
        id: number;
        title?: string;
        name?: string;
        description: string;
        thumbnail: string;
    };
    type: 'characters' | 'comics';
}

const Card: React.FC<CardProps> = ({ item, type }) => {
    const title = item.title || item.name;

    return (
        <Link to={`/${type}/${item.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <img src={item.thumbnail} alt={title} className={styles.thumbnail} />
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
            </div>
        </Link>
    );
};

export default Card;
