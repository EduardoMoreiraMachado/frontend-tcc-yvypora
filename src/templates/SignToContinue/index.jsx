import './style.css'

import { Footer } from '../../components/Footer'
import { GreenButton } from '../../components/GreenButton'
import { WhiteButton } from '../../components/WhiteButton'

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'

export const SignToContinue = () => {
    return(
        <div className='sign-to-continue-container'>
            <header>
                <div className='header-icon'>
                    <img className='icon-yvy' src={YvyporaTextIcon} alt=''/>
                </div>
            </header>
            <div className='sign-to-continue-content'>
                <div className='message-box'>
                    <h1>Para comprar esse produto, por favor acesse sua conta!</h1>
                    <div className='message-buttons'>
                        <GreenButton
                            text="Login"
                        />
                        <WhiteButton
                            text="Criar conta"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignToContinue