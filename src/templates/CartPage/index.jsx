import "./style.css"
import { SearchInputHeader } from '../../components/SearchInputHeader';
import { Title } from "../../components/Title"
import NavBar from "../../components/NavBar";
import InfoBuy from "../../components/InfoBuy";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import PaymentCard from "../../components/PaymentCard";
import LittleOption from "../../components/LittleOption";
import Footer from "../../components/Footer";


export const CartPage = (price) => {
    return (
        <div className="cartpage-container">
            <SearchInputHeader />
            <Title text={'Meu Carrinho'} />
            <div className="main-container-cart">
                <NavBar />
                <div className="card-payment-container">
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
                    <div className="payment-container">
                        <PaymentCard price={591.99} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage