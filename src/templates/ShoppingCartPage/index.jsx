import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';

export const ShoppingCartPage = () => {
    return(
        <div className={styles['shopping-cart-page-container']}>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className={styles['cart-page-content']}>
                <NavBar />
                <div className={styles['selected-products']}>
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
                <div className={styles['payment-method']}>

                </div>
            </div>
            
        </div>
    )
}

export default ShoppingCartPage;
