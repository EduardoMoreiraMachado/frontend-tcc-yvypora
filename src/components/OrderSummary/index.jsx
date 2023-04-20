import styles from './style.module.css'

import { GreenButton } from '../GreenButton'

export const OrderSummary = ({totalPrice}) => {
    return(
        <div className='order-summary-container'>
            <span className='summary-title'>Resumo do pedido</span>
            <div className='summary-price'>
                <h1 className='total-text'>TOTAL:</h1>
                <h1 className='total-price'>R${totalPrice}</h1>
            </div>
            <div className='payment-button'>
                <GreenButton text='Pagar' />
            </div>
        </div>
    )
}