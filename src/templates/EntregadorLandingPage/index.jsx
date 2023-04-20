import styles from './style.module.css'

import { Footer } from '../../components/Footer'
import { MoreTextOption } from '../../components/MoreTextOption'

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'
import ShoppingBag from '../../imgs/shopping_bag.png'
import GainIcon from '../../imgs/gain_icon.png'
import HealthyFoodIcon from '../../imgs/healthy_food_icon.png'
import SecretaryIcon from '../../imgs/secretary_icon.png'
import LocationIcon from '../../imgs/location_icon.png'

export const EntregadorLandingPage = () => {
    return(
        <div className="entregador-landing-page-container">
            <header id='header-entregador'>
                <div className='header-icon' id='default-header-icon'>
                    <img className='text-icon' src={YvyporaTextIcon} alt=''/>
                </div>
                <div className="header-links">
                    <a href='#benefits'>Vantagens</a>
                    <a href='#info'>Entregas</a>
                    <a href='#about'>Sobre a plataforma</a>
                </div>
            </header>
            <div className="welcome-message-content">
                <div className='welcome-message'>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.</p>
                </div>
            </div>
            <div className="benefits-content" id='benefits'>
                <h1>Vantagens</h1>
                <div className='benefits'>
                    <div className='benefit'>
                        <img src={ShoppingBag} alt=''/> 
                        <span>Desconto em compras na nossa plataforma</span>
                    </div>
                    <div className='benefit'>
                        <img src={ShoppingBag} alt=''/>
                        <span>Frete grátis em pedidos na nossa plataforma</span>
                    </div>
                    <div className='benefit'>
                        <img src={ShoppingBag} alt=''/>
                        <span>Desconto em compras online</span>
                    </div>
                    <div className='benefit'>
                        <img src={ShoppingBag} alt=''/>
                        <span>Desconto em compras online</span>
                    </div>
                </div>
            </div>
            <div className="info-content" id='info'>
                <h1>Entregas</h1>
                <div className='options-container'>
                    <MoreTextOption 
                        title='Como começar?'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.'
                    />
                    <MoreTextOption 
                        title='Quais são os melhores horários para trabalhar'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.'
                    />
                    <MoreTextOption 
                        title='O que não fazer?'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.'
                    />
                    <MoreTextOption 
                        title='Como otimzar meu tempo?'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.'
                    />
                    <MoreTextOption 
                        title='Mais dicas'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit explicabo iure eaque ratione, ab tempore ad, odit minus facilis sunt inventore quisquam beatae quidem esse. Explicabo eligendi adipisci necessitatibus.'
                    />
                </div>
            </div>
            <div className="about-content" id='about'>
                <h1>Sobre a plataforma</h1>
                <div className='about-texts'>
                    <div className='about-text'>
                        {/* <img src={GainIcon} alt=''/> */}
                        <div className='about-image' style={{backgroundImage: `url(${GainIcon})`}}></div>
                        <span>Acompanhe os ganhos de maneira fácil e simples!</span>
                    </div>
                    <div className='about-text'>
                        {/* <img src={HealthyFoodIcon} alt=''/> */}
                        <div className='about-image' style={{backgroundImage: `url(${HealthyFoodIcon})`}}></div>
                        <span>Trabalhe com os produtos mais saudáveis possíveis!</span>
                    </div>
                    <div className='about-text'>
                        {/* <img src={SecretaryIcon} alt=''/> */}
                        <div className='about-image' style={{backgroundImage: `url(${SecretaryIcon})`}}></div>
                        <span>Plataforma simplificada para melhor entendimento!</span>
                    </div>
                    <div className='about-text'>
                        {/* <img src={LocationIcon} alt=''/> */}
                        <div className='about-image' style={{backgroundImage: `url(${LocationIcon})`}}></div>
                        <span>Encontre as rotas mais rápidas para manter o produto o mais fresco possível!</span>
                    </div>
                </div>
            </div>
            <div id='footer-entregador'>
                <Footer />
            </div>
        </div>
    )
}

export default EntregadorLandingPage
