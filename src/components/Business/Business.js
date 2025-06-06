import styles from './business.module.css';

export default function Business(props){

    return (
        <div className={styles.business}>
            <img src={props.image_url} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.rating} stars, {props.review_count} reviews</p>
        </div>
    );
}