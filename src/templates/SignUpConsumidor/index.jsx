import './style.css'

import { Footer } from '../../components/Footer'
import { EmptyHeader } from '../../components/EmptyHeader'
import { DefaultInput } from '../../components/DefaultInput'
import { GreenButton } from '../../components/GreenButton'
import { SpecialInput } from '../../components/SpecialInput'
import { Title } from '../../components/Title'
import { AddImage } from '../../components/AddImage'

import { useState } from 'react'


export const SignUpConsumidor = () => {
<<<<<<< HEAD

    
=======
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

>>>>>>> c2e9a93f3268b0e080cd01b155a8e9c580f6eea9
    return (
        <div className='main-cadastro'>
            <EmptyHeader />

            <div className="title-container">
                <Title text='Cadastre-se' />
            </div>
            <div className="input-container">
                <div className="inputs">
                    <DefaultInput
                        name='Nome'
                        type='text'
                    />
                    <DefaultInput
                        name='Email'
                        type='text'
                    />
                    <DefaultInput
                        name='Senha'
                        type='password'
                    />
                    <SpecialInput 
                        name="cpf"
                        label="CPF"
                        mask="999.999.999-99"
                        value={values.cpf}
                        onChange={handleChange}
                    />
                    <SpecialInput 
                        name="cep"
                        label="CEP"
                        mask="99999-999"
                        value={values.cep}
                        onChange={handleChange}
                    />
                    <DefaultInput
                        name='Data de nascimento'
                        type='date'
                    />
                </div>


                <div className="button-add-image-container">
                    <AddImage text='Adicione uma foto de perfil' />
                    <GreenButton
                        text='Cadastrar' />
                </div>
            </div>

            <Footer />
        </div>
    )
}


export default SignUpConsumidor