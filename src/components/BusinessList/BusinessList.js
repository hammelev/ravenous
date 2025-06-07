import styles from './businessList.module.css';

// Components imported
import Business from '../Business/Business';

export default function BusinessList({businesses, selectedSortOption, errorLoadingData, isLoading}) {

    return (
    <div className={styles.businessList}>
        {businesses[selectedSortOption] ?
            businesses[selectedSortOption].map(business => <Business key={business.id} {...business}></Business>) :
            <p className={styles.loading} key="loading">{errorLoadingData ? 'Error loading data - Try Again.' : isLoading ? 'Loading...' : 'Input what to eat, where, and press search to receive recommendations.'}</p>}
    </div>
    );
}