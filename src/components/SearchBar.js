import React from 'react';

// Components imported
import SearchReasturant from './SearchRestaurant';
import SortRestaurantBy from './SortRestaurantBy';

export default function SearchBar(){

    return (
        <div>
            <SearchReasturant/>
            <SortRestaurantBy/>
        </div>
    );
}