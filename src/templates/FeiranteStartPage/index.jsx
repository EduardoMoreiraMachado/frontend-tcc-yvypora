import './style.css'

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
        <div className='feirante-start-page-container'>
            <Header 
                imgUrl="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            />
            <div className='page-content'>
                <NavBar />
                <div className='info-boxes'>
                    <div className='add-products-or-fairs'>
                        <h1>COMECE A FATURAR COM A YVYPORÃ HOJE!</h1>
                        <p>Adicione seus produtos ou cadastre as feiras as quais faz parte</p>
                        <div className='add-icons'>
                            <div className='add-products'>
                                <div id='products-add' className='green-add-icon'>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className='products-icon' src={AddProductsIcon} alt=""/>
                            </div>
                            <div className='add-fairs'>
                                <div id='fairs-add' className='green-add-icon'>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className='fairs-icon' src={AddFairsIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='feirante-activity'>
                        <div className='half-historic'>
                            <h1>Sua atividade hoje</h1>
                            <h2>Ganhos</h2>
                            <div className='money-visibility'>
                                <h1 style={isVisible ? {color: '#245501'} : {color: 'transparent'}}>R$ 0,00</h1>
                                <button onClick={toggleVisibility} style={isVisible ? {backgroundImage: `url(${EyeNotVisible})`} : {backgroundImage: `url(${EyeVisible})`}}/>
                            </div>
                            <div className='sales'>
                                <h3>Venda às 12:59</h3>
                                <span>R$ 5,00</span>
                            </div>
                        </div>
                        <div className='all-historic-button'>
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
