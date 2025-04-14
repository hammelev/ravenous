import React from 'react';
import styles from './searchBar.module.css';

export default function SearchReasturant({searchOptions, onSetSearchOptions, onHandleSearch}){

    /**
     * @param {string} searchOptionToUpdate denotes which of the search options the event handler should update.
     * @returns void. Updates the searchOptionToUpdate of the searchOptions to the newest value of the input field the change handler is used for. All other values of searchOptions remain the same.
     */
    const handleChange = (searchOptionToUpdate) => (e) => {
        onSetSearchOptions( prevSearchOptions => ({
            ...prevSearchOptions,
            [searchOptionToUpdate]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onHandleSearch();
    }
    

    return (
        <form className={styles.searchInput}>
            <label htmlFor='searchRestaurantTerm'>Search for:</label>
            <input type='text' id='searchRestaurantTerm' value={searchOptions.searchTerm} onChange={handleChange('searchTerm')}/>
            <label htmlFor='searchRestaurantLocation'>Location:</label>
            <input type='text' id='searchRestaurantLocation' value={searchOptions.location} onChange={handleChange('location')}/>
            <input type='submit' value='Search' onClick={handleSubmit}/>
        </form>
    )
}