import './style.css'

import { Footer } from '../../components/Footer'
import { GreenButton } from '../../components/GreenButton'
import { WhiteButton } from '../../components/WhiteButton'
import { EmptyHeader } from '../../components/EmptyHeader'

export const SignToContinue = () => {
    return(
        <div className='sign-to-continue-container'>
            <EmptyHeader />
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