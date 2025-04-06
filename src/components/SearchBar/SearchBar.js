import React from 'react';

import styles from './searchBar.module.css';

// Components imported
import SearchReasturant from './SearchRestaurant';
import SortRestaurantBy from './SortRestaurantBy';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

export default function SearchBar(){

    return (
        <div className={styles.searchBar} id='searchBar'>
            <SearchReasturant/>
            <SortRestaurantBy sortByOptions={sortByOptions}/>
        </div>
    );
}