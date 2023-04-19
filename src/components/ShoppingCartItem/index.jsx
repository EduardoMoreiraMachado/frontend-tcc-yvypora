import './style.css'

import { useState } from 'react'

function calculateResult(num1, num2) {
    const result = num1 * num2
    const updatedResult = result.toString().replace(/\./g, ',')
    return updatedResult
}

export const ShoppingCartItem = ({name, imgUrl, unit, price}) => {
    const [itemCount, setItemCount] = useState(1);
    const [deleteProduct, setDeleteProduct] = useState(false)

    const resultValue = calculateResult(price, itemCount)

    if(deleteProduct === false) {
        return(
            <div className='shopping-cart-item-container'>
                {/* <input className='item-check' type='checkbox'/> */}
                <div className='item-info'>
                    <div className='item-image'>
                        <h1 className='name'>{name}</h1>
                        <div className='product-cart-image' style={{backgroundImage: `url(${imgUrl})`}}></div>
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
                {itemCount === 0 &&
                    <div className='delete-cart-product-card'>
                        <div className='delete-cart-content'>
                            <h1>Gostaria de remover o produto {name}?</h1>
                            <div className='delete-cart-options'>
                                <span id='delete' onClick={() => setDeleteProduct(true)}>Remover</span>
                                <span id='cancel' onClick={() => {setItemCount(1)}}>Cancelar</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ShoppingCartItem