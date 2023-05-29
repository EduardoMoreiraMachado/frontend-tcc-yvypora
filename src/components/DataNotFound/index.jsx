import styles from './styles.module.css';

import DataNotFoundGIF from '../../imgs/data_not_found.gif'

export const DataNotFound = ({text}) => {
    return(
        <div className={styles['data-not-found-container']}>
            <img src={DataNotFoundGIF} alt='' className={styles['data-not-found-gif']}/>
            {text &&
                <h1>{text}</h1>
            }   
        </div>
    )
}