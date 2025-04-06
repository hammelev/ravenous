import React from 'react';
import styles from './business.module.css';

export default function Business(props){

    return <p className={styles.business}>{JSON.stringify(props, null, 2)}</p>;
}