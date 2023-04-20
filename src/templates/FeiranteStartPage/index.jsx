import styles from './styles.module.css'

import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import GreenAddIcon from '../../imgs/green_add_icon.svg'
import AddProductsIcon from '../../imgs/add_products_icon.png'
import AddFairsIcon from '../../imgs/add_fairs_icon.png'
import EyeVisible from '../../imgs/eye_visible.png'
import EyeNotVisible from '../../imgs/eye_not_visible.png'

import { useState } from 'react'

export const FeiranteStartPage = () => {
    const [ isVisible, setIsVisible ] = useState(true);

    function toggleVisibility() {
        setIsVisible(!isVisible)
    }

    return(
        <div className={styles['feirante-start-page-container']}>
            <Header 
                imgUrl="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            />
            <div className={styles['page-content']}>
                <NavBar />
                <div className={styles['info-boxes']}>
                    <div className={styles['add-products-or-fairs']}>
                        <h1>COMECE A FATURAR COM A YVYPORÃ HOJE!</h1>
                        <p>Adicione seus produtos ou cadastre as feiras as quais faz parte</p>
                        <div className={styles['add-icons']}>
                            <div className={styles['add-products']}>
                                <div id={styles['products-add']} className={styles['green-add-icon']}>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className={styles['products-icon']} src={AddProductsIcon} alt=""/>
                            </div>
                            <div className={styles['add-fairs']}>
                                <div id={styles['fairs-add']} className={styles['green-add-icon']}>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className={styles['fairs-icon']} src={AddFairsIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles['feirante-activity']}>
                        <div className={styles['half-historic']}>
                            <h1>Sua atividade hoje</h1>
                            <h2>Ganhos</h2>
                            <div className={styles['money-visibility']}>
                                <h1 style={isVisible ? {color: '#245501'} : {color: 'transparent', backgroundColor: '#6661'}}>R$ 0,00</h1>
                                <button onClick={toggleVisibility} style={isVisible ? {backgroundImage: `url(${EyeNotVisible})`} : {backgroundImage: `url(${EyeVisible})`}}/>
                            </div>
                            <div className={styles['sales']}>
                                <h3>Venda às 12:59</h3>
                                <span>R$ 5,00</span>
                            </div>
                        </div>
                        <div className={styles['all-historic-button']}>
                            <h1>Ver histórico completo</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FeiranteStartPage
