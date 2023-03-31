import "./style.css"
import Title from "../../components/Title"
import InfoBuyClick from "../../components/InfoBuyClick"
import Footer from "../../components/Footer"
import { ShoppingCartItem } from "../../components/ShoppingCartItem"
import { Header } from "../../components/Header"

export const BuyHistory = () =>{

    //  Tem que ser o preco que cada card vai passar para o banco
    //  tem que ter um retorno aqui pra ir pro infoBuy
    const preco = 189.80
    return (
        <div className="buy-history-container">
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <Title text={'Histórico de Compras'}/>
            {/* <UserImage                     
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            /> */}
            <div className="main-buy-container">
                    <InfoBuyClick 
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
                        price={preco}
                        state={false}
                    />
                <div className="card-buy-container">
                    <InfoBuyClick 
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
                        state={false}
                    />
                    
                </div>
                <div className="card-buy-container">
                    <InfoBuyClick
                        imgURL={"https://blog.sansuy.com.br/wp-content/uploads/2020/04/original-1f9941da9ca09fa415d6a0139a3dc33a-710x474.jpg"}
                        nameCostumer={"Barraca do Seu Zé"}
                        nameFair={"Feira de Barueri"}
                        date={'31/02/23'}
                        state={false}
                    />
                    
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default BuyHistory