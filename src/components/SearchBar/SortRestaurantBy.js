import React from 'react';
import styles from './searchBar.module.css';

export default function SortRestaurantBy({sortByOptions, sortBy, onSetSortBy}){

    const handleSortByChange = (sortByOptionValue) => {
        onSetSortBy(sortByOptionValue);
    }

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? styles.active : '';
    }

    return (
        <ul className={styles.sortInput}>
            {Object.keys(sortByOptions).map(key => {
                let sortByOptionValue = sortByOptions[key];
                return <li key={key} className={getSortByClass(sortByOptionValue)} onClick={() => handleSortByChange(sortByOptionValue)}>{key}</li>
            })}
        </ul>
                
    );
}