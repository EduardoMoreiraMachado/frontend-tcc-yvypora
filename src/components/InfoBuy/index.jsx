import "./style.css"

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date, price}) => {
    return(
        <div className="info-buy-container">
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