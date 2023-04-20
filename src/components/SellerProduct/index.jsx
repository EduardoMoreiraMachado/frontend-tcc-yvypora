import { useState } from 'react';

import styles from './style.module.css'

import DeleteImage from '../../imgs/delete_icon.svg'
import UpdateImage from '../../imgs/update_icon.svg'
import PauseImage from '../../imgs/pause_icon.svg'

export const SellerProduct = ({name, imgUrl, unit, price, available_quantity, type_of_price}) => {
    const [itemCount, setItemCount] = useState(available_quantity);

    return(
        <div className='seller-product-container'>
            <div className='product-data'>
                <div className='product-visual'>
                    <h1 className='name'>{name}</h1>
                    <img className='image' src={imgUrl} alt=''/>
                </div>
                <div className='product-price'>
                    <h1 className='unit'>{unit} {type_of_price}</h1>
                    <span className='price'>R$ {price}</span>
                </div>
            </div>
            <div className='product-quantity'>
                <div className='number-quantity'>
                    <span className='text'>Quantidade disponível</span>
                    <div className='amount'>
                        <button className='sub-button' onClick={() => {itemCount > 0 && (setItemCount(itemCount - 1))}}/>
                        <h1 className='number'>{itemCount}</h1>
                        <button className='add-button' onClick={() => setItemCount(itemCount + 1)}/>
                    </div>
                </div>
                <div className='edit-status'>
                    <button className='status-button'>
                        <img className='status-image' src={DeleteImage} alt=''/>
                    </button>
                    <button className='status-button'>
                        <img className='status-image' src={UpdateImage} alt=''/>
                    </button>
                    <button className='status-button'>
                        <img className='status-image' src={PauseImage} alt=''/>
                    </button>
                </div>
            </div>
        </div>
    )
}