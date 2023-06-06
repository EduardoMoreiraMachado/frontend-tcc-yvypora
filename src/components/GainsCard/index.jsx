import styles from './styles.module.css'

export const GainsCard = ({text, value, percentage}) => {
    const color = percentage > 0 ? '#74A34C' : 'brown';

    const processedValue = value.toString().replace(/\./g, ",");

    const symbol = color == '#74A34C' ? '+' : '';

    return(
        <div className={styles["gains-card-container"]}>
            <h1>{text}</h1>
            <div className={styles['value']}>
                <h2>R$ {processedValue}</h2>
                {/* <span>
                    <span style={{color: color}}>{symbol}{percentage}%</span> vs ontem
                </span> */}
            </div>
        </div>
    )
}

export default GainsCard 
