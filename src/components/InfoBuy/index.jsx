import "./style.css"

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date}) => {
    return(
        <div className="info-buy-container">
            <img src={imgURL} alt="" className="img-infobuy"/>
            <div className="text-info-container">
                <p className="name-costumer">{nameCostumer}</p>
                <p className="name-fair">{nameFair}</p>
                <p className="date-buy">Data : {date}</p>
            </div>
        </div>
    )

}

export default InfoBuy