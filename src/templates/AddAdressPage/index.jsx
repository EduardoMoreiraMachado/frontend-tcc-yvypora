import styles from './style.module.css'

import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DefaultInput } from '../../components/DefaultInput'
import { SpecialInput } from '../../components/SpecialInput'
import { GreenButton } from '../../components/GreenButton'
import { Header } from '../../components/Header'

import { useState } from 'react'

export const AddAdressPage = () => {
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className={styles['add-adress-page-container']}>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className={styles['add-adress-title']}>
                <Title className={styles['title']} text='Adicione um endereço'/>
                <h1 className={styles['add-adress-subtitle']}>Insira os dados do endereço onde seus produtos serão entregados.</h1>
            </div>
            <div className={styles['inputs-container']}>
                <div className={styles['inputs']}>
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
            <div className={styles['save-button']}>
                <GreenButton text="Salvar"/>
            </div>
            <Footer />
        </div>
    )
}

export default AddAdressPage