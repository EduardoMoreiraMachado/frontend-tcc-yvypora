import { useState } from "react"
import ShoppingCartItem from "../ShoppingCartItem"
import "./style.css"

export const InfoBuy = ({imgURL,nameCostumer, nameFair, date, price, state}) => {
    

    const [disabled, setDisabled] = useState(state)

    const handleClick = (e) =>{
        setDisabled(!disabled)
        
    }

    return(
        <div className="info-buy-click-container" onClick={handleClick}>
            <div className="img-container-click">
                <img src={imgURL} alt="" className="img-infobuy"/>
            </div>
            <div className="text-info-click-container">
                <p className="name-costumer-click">{nameCostumer}</p>
                <p className="name-fair-click">{nameFair}</p>
                <p className="date-buy-click">Data : {date}</p>
                <p className={price ? "price-buy" : "price-buy-disabled"}>Total : {price}</p>
            </div>

            {disabled && 
            
            <div>
                <div className="card-buy-container">
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                     <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                     <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                </div>
            </div>}
        </div>
    )
}

export default InfoBuy