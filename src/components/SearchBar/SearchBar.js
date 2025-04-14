import React, {useState} from 'react';

import styles from './searchBar.module.css';

// Components imported
import SearchReasturant from './SearchRestaurant';
import SortRestaurantBy from './SortRestaurantBy';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

export default function SearchBar({onSearchRestaurants}){
    const [searchOptions, setSearchOptions] = useState({
        searchTerm: '',
        location: '',
    })

    const [sortBy, setSortBy] = useState('best_match');

    const handleSearch = () => {
        onSearchRestaurants(searchOptions, sortBy);
    }

    return (
        <div className={styles.searchBar} id='searchBar'>
            <SearchReasturant searchOptions={searchOptions} onSetSearchOptions={setSearchOptions} onHandleSearch={handleSearch}/>
            <SortRestaurantBy sortByOptions={sortByOptions} sortBy={sortBy} onSetSortBy={setSortBy}/>
        </div>
    );
}