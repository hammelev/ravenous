import React from 'react';
import styles from './business.module.css';

export default function Business(props){

    return (
        <div className={styles.business}>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    );
}