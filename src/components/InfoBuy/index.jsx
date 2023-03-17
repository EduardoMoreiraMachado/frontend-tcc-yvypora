import "./style.css"

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date}) => {
    return(
        <div className="info-buy-container">
            <img src={imgURL} alt="" />
            <div className="text-info-container">
                <p>{nameCostumer}</p>
                <p>{nameFair}</p>
                <p>Data : {date}</p>
            </div>
        </div>
    )

}

export default InfoBuy