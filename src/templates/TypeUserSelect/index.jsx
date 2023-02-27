import './style.css'

import WelcomeImage from '../../imgs/fruits_greenery.svg'

import {EmptyHeader} from '../../components/EmptyHeader'
import { GreenButton } from '../../components/GreenButton'
import { WhiteButton } from '../../components/WhiteButton'
import { ShoppingCartItem } from '../../components/ShoppingCartItem'

export const TypeUserSelect = () => {

    return (
        <>
            <EmptyHeader/>
            <div className='welcome-container'>
                <div className='welcome-message'>
                    <h1 className='welcome-text'>
                        Bem-vindo(a) ao <span className='strong-welcome-text'>yvyporã</span>, a sua feira digital!
                    </h1>
                    <img className='welcome-image' src={WelcomeImage} alt=''/>
                </div>
                <div className='user-select'>
                    <h1 className='user-select-text'>Como você usará a plataforma?</h1>
                    <GreenButton text='Consumidor'/>
                    <WhiteButton text='Feirante'/>
                </div>
            </div>
            <ShoppingCartItem/>
        </>
    )

}