import React from 'react';
import styles from './businessList.module.css';

// Components imported
import Business from '../Business/Business';

export default function BusinessList({businesses}) {

    return (
    <div className={styles.businessList}>
        {businesses.map(business => <Business key={business.name} {...business}></Business>)}
    </div>
    );
}