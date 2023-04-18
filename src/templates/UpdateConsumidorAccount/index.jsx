import './style.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { Title } from '../../components/Title'
import { DefaultInput } from '../../components/DefaultInput'
import { SpecialInput } from '../../components/SpecialInput'
import { GreenButton } from '../../components/GreenButton'

import { useState } from 'react'

export const UpdateConsumidorAccount = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user-details"))
      );
      
    const [values, setValues] = useState({});
    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className='update-consumidor-account-container'>
            <Header 
                user={user}
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
                        name="Nome" 
                        type="text" 
                    />
                    <DefaultInput 
                        name="Email" 
                        type="email" 
                    />
                    <DefaultInput 
                        name="Senha" 
                        type="password" 
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

export default UpdateConsumidorAccount
