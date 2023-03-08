import './style.css'

import { EmptyHeader } from '../../components/EmptyHeader'
import { Title } from '../../components/Title'
import { DefaultInput } from '../../components/DefaultInput'
import { AddImage } from '../../components/AddImage'
import { GreenButton } from '../../components/GreenButton'
import { Footer } from '../../components/Footer'
import { SpecialInput } from '../../components/SpecialInput'

import { useState } from 'react'
 

export const SignUpFeirante = () => {
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className='main-cadastro'> 
            <EmptyHeader />

            <Title text='Cadastre-se' />
            <div className="input-container">
                <div className="inputs-feirante">
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
                        name="phone"
                        label="Telefone"
                        mask="(999) 9 9999-9999"
                        value={values.phone}
                        onChange={handleChange}
                    />
                    <DefaultInput
                        name='Nome do estabelecimento'
                        type='text'
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

export default SignUpFeirante
