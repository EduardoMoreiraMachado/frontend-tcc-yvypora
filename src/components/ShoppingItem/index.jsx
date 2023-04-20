import PromoImg from '../../imgs/promotion1.svg'
 
import styles from './style.module.css'

import { useEffect, useState } from 'react'

export const ShoppingItem = ({name, imgUrl, weight, price, promo}) => {
    const [ promoExists, setPromoExists ] = useState(0)

    useEffect(() => {
        if(promo) {
            setPromoExists(100)
        }
    }, [])

    return(
        <div className='shopping-item-container'>
            <div className='item-visual'> 
            <div className='header-card'>  
                <h1 className='name'>{name}</h1>
                <img className = 'promotion-img 'src={PromoImg} alt="" style={{opacity: promoExists}}/>
            </div>
                <div className='item-image'>
                    <img className='image' src={imgUrl} alt=''/>
                </div>
            </div>
            <div className='item-numbers'>
                <div className='numbers'>
                    <h1 className='weight'>{weight}</h1>
                    <span className='price-general'>R$ {price}</span>
                </div>
                <div className='cart-icon-box'>
                    <button className='cart-icon'/>
                </div>
            </div>
        </div>
    )
}
