import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const AfterSalePage = () => {
    return(
        <div className={styles['after-sale-page-container']}>
            <Header user={JSON.parse(localStorage.getItem("user-details"))} />
            <div className={styles['after-sale-content']}>
                
            </div>
            <Footer />
        </div>
    )
}

export default AfterSalePage
