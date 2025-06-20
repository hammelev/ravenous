import styles from './searchBar.module.css';

export default function SearchResturant({searchOptions, onSetSearchOptions, onHandleSearch}){

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
        <form className={styles.searchInput} onSubmit={handleSubmit}>
            <input type='text' id='searchRestaurantTerm' placeholder='What to eat?' value={searchOptions.searchTerm} onChange={handleChange('searchTerm')} required/>
            <input type='text' id='searchRestaurantLocation' placeholder='Where?' value={searchOptions.location} onChange={handleChange('location')} required/>
            <input type='submit' value='Search'/>
        </form>
    )
}