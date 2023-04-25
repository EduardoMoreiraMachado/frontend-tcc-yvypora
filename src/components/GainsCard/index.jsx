import { Chart } from 'react-charts'
import styles from './styles.module.css'

export const GainsCard = ({title,data}) =>{

return(
   <div className={styles["card-gain-container"]}>
        <div className={title!=='Mensal' ? styles['card-gain'] : ""}>
            <p className={styles['title-gain-card']}>{title}</p>
            <p className={styles['data-gain-card']}>{data}</p>
            
            {/* {percent > 1.10 &&

            <div>
                <p></p>
            </div>
            } */}
        </div>
    </div>
)
}

export default GainsCard 

