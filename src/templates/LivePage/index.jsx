import styles from './styles.module.css'

import { UnderConstruction } from '../../components/UnderConstruction'

export const LivePage = () => {
    return(
        <div className={styles['live-page-container']}>
            <div className={styles['live-content']}>
                <UnderConstruction 
                    text='Página em construção!'
                />
            </div>
        </div>
    )
}

export default LivePage
