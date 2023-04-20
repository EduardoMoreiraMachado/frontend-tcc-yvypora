import styles from './styles.module.css'

export const BoughtItem = ({name, imgUrl, unit, price, qnt}) => {
    return(
        <div className={styles['bought-item-container']}>
            <div className={styles['bought-item-visual']}>
                <h1>{name}</h1>
                <div className={styles['image']} style={{backgroundImage: `url(${imgUrl})`}}></div>
            </div>
            <div className={styles['bought-item-numbers']}>
                <span>{unit}</span>
                <h1>{price}</h1>
                <h2>Quant.: {qnt}</h2>
            </div>
        </div>
    )
}
