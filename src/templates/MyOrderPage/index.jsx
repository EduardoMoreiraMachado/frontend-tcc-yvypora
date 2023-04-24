import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Footer } from '../../components/Footer'
import { RatingStarsStatic } from '../../components/RatingStarsStatic'

import MessageIcon from '../../imgs/message_icon.png'
import CallIcon from '../../imgs/call_icon.png'

export const MyOrderPage = () => {
    return(
        <div className={styles['my-order-page-container']}>
            <Header user={JSON.parse(localStorage.getItem("user-details"))} />
            <Title text='Meu pedido' />
            <div className={styles['my-order-content']}>

                <div className={styles['delivery-man-card']}>

                    <div className={styles['delivery-header']}>
                        <div className={styles['photo']} style={{backgroundImage: `url('https://img.freepik.com/fotos-premium/entregador-de-retrato-de-perfil-no-rosto-segurando-caixas-de-papelao-e-uma-casa-de-papel_416530-558.jpg')`}}></div>
                        <div className={styles['review']}>
                            <h1>Ronaldo Silva</h1>
                            <RatingStarsStatic 
                                reviewValue={0.5}
                            />
                        </div>
                    </div>
                    
                    <div className={styles['delivery-info']}>
                        <div className={styles['info-text']}>
                            <h2>Distância:</h2>
                            <span>2km</span>
                        </div>
                        <div className={styles['info-text']}>
                            <h2>Tempo estimado:</h2>
                            <span>5 minutos</span>
                        </div>
                    </div>
                
                    <div className={styles['delivery-buttons']}>
                        <button id={styles['message']}>
                            <img src={MessageIcon}/>
                            <span>Mensagem</span>
                        </button>
                        <button id={styles['call']}>
                            <img src={CallIcon}/>
                            <span>Ligar</span>
                        </button>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MyOrderPage
