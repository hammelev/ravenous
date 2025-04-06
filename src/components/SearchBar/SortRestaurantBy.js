import React from 'react';
import styles from './searchBar.module.css';

export default function SortRestaurantBy(){

    return (
        <form className={styles.sortInput}>
            <label htmlFor='sortRestaurantByOptions'>Sort by:</label>
            <select id='sortRestaurantBy'>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
            </select>
        </form>
    );
}