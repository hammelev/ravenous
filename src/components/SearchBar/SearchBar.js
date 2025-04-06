import React from 'react';

import styles from './searchBar.module.css';

// Components imported
import SearchReasturant from './SearchRestaurant';
import SortRestaurantBy from './SortRestaurantBy';

export default function SearchBar(){

    return (
        <div className={styles.searchBar} id='searchBar'>
            <SearchReasturant/>
            <SortRestaurantBy/>
        </div>
    );
}