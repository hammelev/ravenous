import {useState} from 'react';

import styles from './searchBar.module.css';

// Components imported
import SearchResturant from './SearchRestaurant';
import SortRestaurantBy from './SortRestaurantBy';

export default function SearchBar({onSearchRestaurants, onUpdateSortOption, selectedSortOption}){
    const [searchOptions, setSearchOptions] = useState({
        searchTerm: '',
        location: '',
    })

    const handleSearch = () => {
        onSearchRestaurants(searchOptions);
    }

    return (
        <header className={styles.searchBar} id='searchBar'>
            <h1>Ravenous</h1>
            <SearchResturant searchOptions={searchOptions} onSetSearchOptions={setSearchOptions} onHandleSearch={handleSearch}/>
            <div>
                <SortRestaurantBy sortBy={selectedSortOption} onSetSortBy={onUpdateSortOption}/>
                <hr/>
            </div>
        </header>
    );
}