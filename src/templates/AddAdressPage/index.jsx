import './style.css'

import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DefaultInput } from '../../components/DefaultInput'
import { SpecialInput } from '../../components/SpecialInput'
import { GreenButton } from '../../components/GreenButton'

import { useState } from 'react'
import { PrevPageHeader } from '../../components/PrevPageHeader'

export const AddAdressPage = () => {
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className='add-adress-page-container'>

            <PrevPageHeader />

            <div className='add-adress-title'>
                <Title className='title' text='Adicione um endereço'/>
                <h1 className='add-adress-subtitle'>Insira os dados do endereço onde seus produtos serão entregados.</h1>
            </div>
            <div className='inputs-container'>
                <div className='inputs'>
                    <h1>Detalhes do endereço</h1>
                    <DefaultInput 
                        name="Nome do endereço"
                        type="text"
                    />
                    <SpecialInput 
                        name="cep"
                        label="CEP"
                        mask="99999-999"
                        value={values.cep}
                        onChange={handleChange}
                    />
                    <DefaultInput 
                        name="Rua"
                        type="text"
                    />
                    <DefaultInput 
                        name="Bairro"
                        type="text"
                    />
                </div>
            </div>
            <div className='save-button'>
                <GreenButton text="Salvar"/>
            </div>
            <Footer />
        </div>
    )
}

export default AddAdressPage