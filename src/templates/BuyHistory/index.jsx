import "./style.css"
import Title from "../../components/Title"
import UserImage from "../../components/UserImage"
import InfoBuy from "../../components/InfoBuy"
import iconYvY from "../../imgs/yvypora_icon.svg"
import Footer from "../../components/Footer"
import { ShoppingCartItem } from "../../components/ShoppingCartItem"

export const BuyHistory = () =>{
    return (
        <div className="buy-history-container">
            <div className="header-buy-container">
                <div className="iconyvy-container">
                    <img src={iconYvY} alt=""  className="icon-yvy"/>
                </div>
                <Title text={'Histórico de Compras'}/>
                <UserImage                     
                    imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
                />
            </div>
            <div className="main-buy-container">
                <div className="card-buy-container">
                    <InfoBuy 
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
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
                <div className="card-buy-container">
                    <InfoBuy 
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
                    />
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />
                </div>
                <div className="card-buy-container">
                    <InfoBuy 
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
                    />
                    <ShoppingCartItem
                        name={'Abobora'}
                        imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                        unit={8591}
                        price={9.09}
                    />

                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default BuyHistory