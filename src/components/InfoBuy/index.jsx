import { useState } from "react"
import styles from './styles.module.css'

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date, price, state}) => {
    

    const [disabled, setDisabled] = useState(state)

    const handleClick = (e) =>{
        setDisabled(!disabled)
        
    }


    return(
        <div className="info-buy-container" onClick={handleClick}>
            <img src={imgURL} alt="" className="img-infobuy"/>
            <div className="text-info-container">
                <p className="name-costumer">{nameCostumer}</p>
                <p className="name-fair">{nameFair}</p>
                <p className="date-buy">Data : {date}</p>
                <p className={price ? "price-buy" : "price-buy-disabled"}>Total : {price}</p>
            </div>
        </div>
    )
}

export default InfoBuy