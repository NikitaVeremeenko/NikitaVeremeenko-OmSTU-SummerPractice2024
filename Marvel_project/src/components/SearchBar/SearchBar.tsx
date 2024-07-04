import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = ({ placeholder }) => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder={placeholder} className={styles.searchInput} />
            <button className={styles.searchButton}>Search</button>
        </div>
    );
};

export default SearchBar;
