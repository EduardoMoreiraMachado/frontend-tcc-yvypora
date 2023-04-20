import styles from './style.module.css'

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'

import { GreenButton } from '../../components/GreenButton'
import { WhiteButton } from '../../components/WhiteButton'
import { Footer } from '../../components/Footer'

export const TypeUserSelect = () => {

    return (
        <div className='type-user-select-container'>
            <header>
                <div className='header-icon'>
                    <img className='icon-yvy' src={YvyporaTextIcon} alt=''/>
                </div>
            </header>
            <div className='welcome-container'>
                <div className='welcome-message'>
                    <h1 className='welcome-text'>
                        Boas-vindas ao <span className='strong-welcome-text'>yvyporã</span>, a sua feira digital!
                    </h1>
                    <div className='welcome-image'></div>
                </div>
                <div className='user-select'>
                    <h1 className='user-select-text'>Como você usará a plataforma?</h1>
                    <GreenButton text='Consumidor'/>
                    <WhiteButton text='Feirante'/>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default TypeUserSelect
