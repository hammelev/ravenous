import styles from './businessList.module.css';

// Components imported
import Business from '../Business/Business';

export default function BusinessList({businesses, selectedSortOption, errorLoadingData}) {

    return (
    <div className={styles.businessList}>
        {businesses[selectedSortOption] ?
            businesses[selectedSortOption].map(business => <Business key={business.id} {...business}></Business>) :
            <p className={styles.loading}>{errorLoadingData ? 'Error loading data - Try Again' : 'Loading...'}</p>}
    </div>
    );
}