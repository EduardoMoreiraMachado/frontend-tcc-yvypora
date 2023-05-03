import { useState } from "react"
import styles from './styles.module.css'

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date, price, state}) => {

    const [disabled, setDisabled] = useState(state)

    const handleClick = (e) =>{
        setDisabled(!disabled)
        
    }

    return(
        <div className={styles["info-buy-container"]} onClick={handleClick}>
            <img src={imgURL} alt="" className={styles["img-infobuy"]}/>
            <div className={styles["text-info-container"]}>
                <p className={styles["name-costumer"]}>{nameCostumer}</p>
                <p className={styles["name-fair"]}>{nameFair}</p>
                <p className={styles["date-buy"]}>Data: {date}</p>
                <p className={price ? "price-buy" : styles["price-buy-disabled"]}>Total: {price}</p>
            </div>
        </div>
    )
}

export default InfoBuy