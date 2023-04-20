import styles from './style.module.css'

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
        <div className="product-page-container">
            <SignHeader />
            <div className="product-containers">
                <NavBar />
                <div className="product-info">
                    <div className="product-main">
                        <div className="image-container" style={{backgroundImage: `url('https://images2.alphacoders.com/554/thumb-1920-554950.jpg')`}}>
                        </div>
                        <div className="texts">
                            <h1 className="title">Beterraba</h1>
                            <div className="review">
                                <img className="stars" src={StarsIconTest} alt=""/>
                                <h2 className="grade">4.2</h2>
                                <div className="grade-info">
                                    <h2 className="review-count">41 avaliações</h2>
                                    <h2 className="order-count">68 pedidos</h2>
                                </div>
                            </div>
                            <span className="user-name">ZédoAlfácil</span>
                            
                            <div className="price-result">
                                <h2 className="unit">1kg</h2>
                                <div className="price-amount">
                                    <h1 className="price">R$ {result}</h1>
                                    <div className='amount'>
                                        <button className='sub-button' onClick={() => {itemCount > 0 && (setItemCount(itemCount - 1))}}/>
                                        <h1 className='number'>{itemCount}</h1>
                                        <button className='add-button' onClick={() => setItemCount(itemCount + 1)}/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="product-footer">
                        <div className="description">
                            <h1 className="description-title">Descrição</h1>
                            <h2 className="description-text">A beterraba é uma planta herbácea da família das Quenopodiáceas, por Cronquist, ou das Amarantáceas, pela APG. Nome derivado do substantivo francês betterave. O colo tuberizado serve, para além dos fins culinários, produção de açúcar.</h2>
                        </div>
                        <button className='add-cart-button'>
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