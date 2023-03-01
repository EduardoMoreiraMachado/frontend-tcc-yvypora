import './style.css'

// import FruitsFooter from '../../imgs/fruits_footer.jpg'

import { EmptyHeader } from '../../components/EmptyHeader'
import { DefaultInput } from '../../components/DefaultInput';
import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';
import {Title} from '../../components/Title'

export const Login = () => {
    return (
        <div className='main'>
            <EmptyHeader />

             <Title text='Login'/>


            <div className="input-container">
                <div className="input">
                <DefaultInput
                    name='Email'
                    type='text'
                />
                <DefaultInput
                    name='Senha'
                    type='password'
                />
                </div>

                <div className="button-container">
                    <GreenButton
                        text='Cadastrar' />
                </div>
            </div>

            {/* <div className='fruits-footer'></div> */}

            <Footer />
        </div>
    )
}


export default Login;