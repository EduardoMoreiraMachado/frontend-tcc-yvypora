import styles from './styles.module.css';

import UnderConstructionGIF from '../../imgs/under_construction.gif'

export const UnderConstruction = ({text}) => {
    return(
        <div className={styles['under-construction-container']}>
            <img src={UnderConstructionGIF} alt='' className={styles['under-construction-gif']}/>
            {text &&
                <h1>{text}</h1>
            }   
        </div>
    )
}
