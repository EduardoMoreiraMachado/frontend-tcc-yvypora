import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { NavBar } from '../../components/NavBar'
import { BoughtItem } from '../../components/BoughtItem'

import { useState } from 'react'

export const PurchasesHistoricPage = () => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className={styles['purchases-historic-page-container']}>
            <Header user={{picture_uri:""}}/>
            <Title 
                text='Histórico de compras'
            />
            <div className={styles['purchase-historic-content']}>
                <NavBar />
                <div className={styles['historic']}>
                    <div className={styles['purchase']}>
                        <div className={styles['main-purchase-info']} onClick={handleClick}>
                            <div className={styles['purchase-image']} style={{backgroundImage: `url('https://pocosdecaldas.mg.gov.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-04-09-at-09.41.39-2-1024x768.jpeg')`}}></div>
                            <div className={styles['purchase-info']}>
                                <h1>Barraca do Seu Zé</h1>
                                <h2>Feira de São Domingos</h2>
                                <span>Data: 41/13/2027</span>
                            </div>
                        </div>
                        {click &&
                            <div className={styles['purchase-products']}>
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
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PurchasesHistoricPage
