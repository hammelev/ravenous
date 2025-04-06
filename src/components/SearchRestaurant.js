import React from 'react';

export default function SearchReasturant(){

    return (
        <form>
            <label htmlFor='searchRestaurantTerm'>Search for:</label>
            <input type='text' id='searchRestaurantTerm'></input>
            <label htmlFor='searchRestaurantLocation'>Search for:</label>
            <input type='text' id='searchRestaurantLocation'></input>
        </form>
    )
}