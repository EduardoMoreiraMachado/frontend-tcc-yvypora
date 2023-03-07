import './style.css';

import { SearchInputHeader } from '../../components/SearchInputHeader';
import { NavBar } from '../../components/NavBar';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';

export const ShoppingCartPage = () => {
    return(
        <div className='shopping-cart-page-container'>
            <header>
                <SearchInputHeader />
            </header>
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