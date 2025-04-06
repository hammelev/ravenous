import React from 'react';
import styles from './searchBar.module.css';

export default function SortRestaurantBy({sortByOptions}){

    return (
        <form className={styles.sortInput}>
            <label htmlFor='sortRestaurantByOptions'>Sort by:</label>
            <select id='sortRestaurantBy'>
                {Object.keys(sortByOptions).map(key => <option>{key}</option>)}
            </select>
        </form>
    );
}