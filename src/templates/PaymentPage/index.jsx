import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BoughtItem } from '../../components/BoughtItem'
import { PrevButton } from '../../components/PrevButton'
import { NextButton } from '../../components/NextButton'
import { GreenButton } from '../../components/GreenButton'
import { WhiteButton } from '../../components/WhiteButton'

import { useRef } from 'react'

export const PaymentPage = () => {
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
    
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return(
        <div className={styles['payment-page-container']}>
            <Header user={{picture_uri:""}}/>
            <div className={styles['payment-content']}>

                <div className={styles['itens-info']}>

                    <div className={styles['address-card']}>
                        <div className={styles['card-header']}>
                            <h1>Endereço</h1>
                            <a href='#'>Mudar</a>
                        </div>
                        <div className={styles['card-main']}>
                            <h1>Casa</h1>
                            <p>Rua Oscar Freire nº126, São Paulo, São Paulo. Brasil</p>
                        </div>
                    </div>

                    <div className={styles['historic']}>
                        <div className={styles['purchase']}>
                            <div className={styles['main-purchase-info']}>
                                <div className={styles['purchase-image']} style={{backgroundImage: `url('https://pocosdecaldas.mg.gov.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-04-09-at-09.41.39-2-1024x768.jpeg')`}}></div>
                                <div className={styles['purchase-info']}>
                                    <h1>Barraca do Seu Zé</h1>
                                    <h2>Feira de São Domingos</h2>
                                    <span>Data: 41/13/2027</span>
                                </div>
                            </div>
                            <div className={styles['purchase-products']} ref={carousel}>
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                                <BoughtItem 
                                    name='Abóbora'
                                    imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                                    unit='800g'
                                    price='R$ 24,00'
                                    qnt={4}
                                />
                            </div>
                            <div className={styles['nav-buttons']}>
                                <PrevButton onClick={handleLeftClick}/>
                                <NextButton onClick={handleRightClick}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles['payment-info']}>
                    <div className={styles['payment-texts']}>
                        <span>Subtotal: <h2>R$ 48,00</h2></span>
                        <span>Taxa de entrega: <h2>R$ 8,32</h2></span>
                        <p>Total: <h1>R$ 56,32</h1></p>
                    </div>  
                    <div className={styles['confirm-buttons']}>
                        <GreenButton
                            text='Confirmar' 
                        />
                        <WhiteButton
                            text='Cancelar' 
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PaymentPage
