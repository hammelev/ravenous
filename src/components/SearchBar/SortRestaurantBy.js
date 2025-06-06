import styles from './searchBar.module.css';

// Configuration
import { SORT_SEARCH_BY_OPTION } from '../../config/sortSearchByOptions';

export default function SortRestaurantBy({sortBy, onSetSortBy}){

    const handleSortByChange = (sortByOptionValue) => {
        onSetSortBy(sortByOptionValue);
    }

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? styles.active : '';
    }

    return (
        <div className={styles.sortInput}>
            {SORT_SEARCH_BY_OPTION.map(sortByOption => {
                return <button key={sortByOption.value} className={getSortByClass(sortByOption.value)} onClick={() => handleSortByChange(sortByOption.value)}>{sortByOption.label}</button>
            })}
        </div>
                
    );
}