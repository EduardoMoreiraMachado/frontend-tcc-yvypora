import './style.css'

import { useState } from 'react'

function calculateResult(num1, num2) {
    const result = num1 * num2
    const updatedResult = result.toString().replace(/\./g, ',')
    return updatedResult
}

export const ShoppingCartItem = ({name, imgUrl, unit, price}) => {
    const [itemCount, setItemCount] = useState(1);
    const priceValue = {price}
    const resultValue = calculateResult(priceValue, itemCount)

    return(
        <div className='shopping-cart-item-container'>
            <input className='item-check' type='checkbox'/>
            <div className='item-info'>
                <div className='item-image'>
                    <h1 className='name'>{name}</h1>
                    <img className='image' src={imgUrl} alt=''/>
                </div>
                <div className='item-count'>
                    <div className='total'>
                        <h1 className='unit'>{unit} unidade</h1>
                        <span className='price-card'>R$ {resultValue}</span>
                    </div>    
                    <div className='amount'>
                        <button className='sub-button' onClick={() => {itemCount > 0 && (setItemCount(itemCount - 1))}}/>
                        <h1>{itemCount}</h1>
                        <button className='add-button' onClick={() => setItemCount(itemCount + 1)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem