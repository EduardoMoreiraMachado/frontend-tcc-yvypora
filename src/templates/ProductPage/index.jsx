import styles from './styles.module.css'

import { SignHeader } from '../../components/SignHeader'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'

import StarsIconTest from '../../imgs/stars_icon_test.svg'
import AddCartIcon from '../../imgs/add_cart_icon.svg'

import { useState } from 'react'

function calculateResult(num1, num2) {
    const result = num1 * num2
    const updatedResult = result.toString().replace(/\./g, ',')
    return updatedResult
}

export const ProductPage = () => {
    const [itemCount, setItemCount] = useState(1)
    const price = 5.5
    const result = calculateResult(price, itemCount)

    return(
        <div className={styles["product-page-container"]}>
            <SignHeader />
            <div className={styles["product-containers"]}>
                <NavBar />
                <div className={styles["product-info"]}>
                    <div className={styles["product-main"]}>
                        <div className={styles["image-container"]} style={{backgroundImage: `url('https://images2.alphacoders.com/554/thumb-1920-554950.jpg')`}}>
                        </div>
                        <div className={styles["texts"]}>
                            <h1 className={styles["title"]}>Beterraba</h1>
                            <div className={styles["review"]}>
                                <img className={styles["stars"]} src={StarsIconTest} alt=""/>
                                <h2 className={styles["grade"]}>4.2</h2>
                                <div className={styles["grade-info"]}>
                                    <h2 className={styles["review-count"]}>41 avaliações</h2>
                                    <h2 className={styles["order-count"]}>68 pedidos</h2>
                                </div>
                            </div>
                            <span className={styles["user-name"]}>ZédoAlfácil</span>
                            
                            <div className={styles["price-result"]}>
                                <h2 className={styles["unit"]}>1kg</h2>
                                <div className={styles["price-amount"]}>
                                    <h1 className={styles["price"]}>R$ {result}</h1>
                                    <div className={styles['amount']}>
                                        <button className={styles['sub-button']} onClick={() => {itemCount > 0 && (setItemCount(itemCount - 1))}}/>
                                        <h1 className={styles['number']}>{itemCount}</h1>
                                        <button className={styles['add-button']} onClick={() => setItemCount(itemCount + 1)}/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={styles["product-footer"]}>
                        <div className={styles["description"]}>
                            <h1 className={styles["description-title"]}>Descrição</h1>
                            <h2 className={styles["description-text"]}>A beterraba é uma planta herbácea da família das Quenopodiáceas, por Cronquist, ou das Amarantáceas, pela APG. Nome derivado do substantivo francês betterave. O colo tuberizado serve, para além dos fins culinários, produção de açúcar.</h2>
                        </div>
                        <button className={styles['add-cart-button']}>
                            <img src={AddCartIcon} alt=""/>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage