import React from 'react';
import styles from './businessList.module.css';

// Components imported
import Business from '../Business/Business';

// Mock data
import businessMock from '../../mocks/businessMock';


export default function BusinessList() {

    return (
    <ul className={styles.businessList}>
        {businessMock.map(mockedBussiness => <li key={businessMock.name}><Business {...mockedBussiness}></Business></li>)}
    </ul>
    );
}