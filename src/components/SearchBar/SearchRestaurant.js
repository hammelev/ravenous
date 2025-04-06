import React from 'react';
import styles from './searchBar.module.css';

export default function SearchReasturant(){

    return (
        <form className={styles.searchInput}>
            <label htmlFor='searchRestaurantTerm'>Search for:</label>
            <input type='text' id='searchRestaurantTerm'/>
            <label htmlFor='searchRestaurantLocation'>Location:</label>
            <input type='text' id='searchRestaurantLocation'/>
            <input type='submit' value='Search'/>
        </form>
    )
}