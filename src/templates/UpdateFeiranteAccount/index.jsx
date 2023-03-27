import './style.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { Title } from '../../components/Title'
import { DefaultInput } from '../../components/DefaultInput'
import { SpecialInput } from '../../components/SpecialInput'
import { GreenButton } from '../../components/GreenButton'

import { useState } from 'react'

export const UpdateFeiranteAccount = () => {
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className='update-feirante-account-container'>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className='update-content'>
                <div className='nav-bar'>
                    <NavBar />
                </div>
                <div className='update-inputs'>
                    <Title 
                        text="Editar conta"
                    />
                   <DefaultInput
                        name='Nome'
                        type='text'
                    />
                    <DefaultInput
                        name='Email'
                        type='email'
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
                    <SpecialInput 
                        name="date"
                        label="Data de nascimento"
                        mask="99/99/9999"
                        value={values.date}
                        onChange={handleChange}
                    />
                </div>
                <div className='green-button'>
                    <GreenButton 
                        text="Salvar"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UpdateFeiranteAccount
