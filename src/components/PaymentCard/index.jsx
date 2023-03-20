import "./style.css"

export const PaymentCard = ({price}) =>{

    return(
    <div className="payment-card-container">
        <h2 className="title-payment">Resumo do Pedido</h2>
        <div className="total-pay">
            <p>TOTAL:</p>
            <p className="price-payment">R${price}</p>
        </div>
        <button className="button-payment">Pagar</button>

    </div>
    )
    

}

export default PaymentCard