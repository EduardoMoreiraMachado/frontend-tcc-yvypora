import './style.css'

import { SearchInputHeader } from '../../components/SearchInputHeader'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { WhiteButton } from '../../components/WhiteButton' 

import StarsIconTest from '../../imgs/stars_icon_test.svg'
import { useState } from 'react'

export const ProductPage = () => {
    const [itemCount, setItemCount] = useState(1)

    return(
        <div className="product-page-container">
            <SearchInputHeader />
            <div className="product-containers">
                <NavBar />
                <div className="product-info">
                    <div className="product-main">
                        <div className="image-container">
                            <img className="product-image" src="https://superazevedo.com.br/wp-content/uploads/2022/02/172.png" alt=""/>
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
                                <div className="price-text">
                                    <h2 className="unit">1kg</h2>
                                    <h1 className="price">R$ {7.50 * itemCount}</h1>
                                </div>
                                <div className='amount'>
                                    <button className='sub-button' onClick={() => {itemCount > 0 && (setItemCount(itemCount - 1))}}/>
                                    <h1 className='number'>{itemCount}</h1>
                                    <button className='add-button' onClick={() => setItemCount(itemCount + 1)}/>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="product-footer">
                        <div className="description">
                            <h1 className="description-title">Descrição</h1>
                            <h2 className="description-text">A beterraba é uma planta herbácea da família das Quenopodiáceas, por Cronquist, ou das Amarantáceas, pela APG. Nome derivado do substantivo francês betterave. O colo tuberizado serve, para além dos fins culinários, produção de açúcar.</h2>
                        </div>
                        <WhiteButton 
                            text="Adicionar ao carrinho"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage