import './style.css';

import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';

export const ShoppingCartPage = () => {
    return(
        <div className='shopping-cart-page-container'>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className='cart-page-content'>
                <NavBar />
                <div className='selected-products'>
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
                <div className='payment-method'>

                </div>
            </div>
            
        </div>
    )
}

export default ShoppingCartPage;
