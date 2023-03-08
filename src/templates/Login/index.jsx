import './style.css'

// import FruitsFooter from '../../imgs/fruits_footer.jpg'

import { EmptyHeader } from '../../components/EmptyHeader'
import { DefaultInput } from '../../components/DefaultInput';
import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';
import {Title} from '../../components/Title'
import { commonsAPI } from '../../api/api';

export const Login = () => {

    const handleClick = async () => {
        try {
            const inputs = document.querySelectorAll("input")
            
            const email = inputs[0].value
            const password = inputs[1].value

            const res = await commonsAPI.post('/login/', {
                email,
                password,
                typeOfUser: "COSTUMER"
            })
            
            if (res.data.error) {
                // append sweet alert   
                console.log(res.data.message); 
            }
        
            // redirect if everything is ok!
            console.log(res.data);
        } catch (error) {
            console.log(error);
            // append sweet alert
        }
    }


    return (
        <div className='main'>
            <EmptyHeader />

            <Title text='Login' />

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
                        text='Cadastrar' onClick={handleClick}/>
                </div>
            </div>

            {/* <div className='fruits-footer'></div> */}

            <Footer />
        </div>
    )
}


export default Login;