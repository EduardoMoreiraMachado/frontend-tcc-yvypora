import styles from './styles.module.css'

export const PaymentSuccessful = () => {
    return(
        <div className={styles['payment-successful-container']}>
            <div className={styles['check-circle-icon']}></div>
            <h1>Pagamento efetuado com sucesso!</h1>
            <p>Retorne para o aplicativo</p>
        </div>
    )
}

export default PaymentSuccessful
