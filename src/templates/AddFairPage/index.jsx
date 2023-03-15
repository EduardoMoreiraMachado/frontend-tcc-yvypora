import { SpecialInput } from '../../components/SpecialInput'
import { TitleSubtitle } from '../../components/TitleSubtitle'
import { useState } from 'react'
import { DefaultInput } from '../../components/DefaultInput'
import { AddImage } from '../../components/AddImage'
import { GreenButton } from '../../components/GreenButton'
import { Footer } from '../../components/Footer'
import './style.css'
import PrevPageIcon from '../../imgs/prev_page_icon.svg'



export const AddFairPage = () => {
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <a className='prev-page-button'>
                <img className='prev-page-icon' src={PrevPageIcon} alt=''/>
            </a>
            <TitleSubtitle 
                text={'Escolha o local'}
                subtitle='Insira as feiras onde seus produtos serão vendidos' 
            />

            <div className="main-container">
                <div className='inputs-container'>
                    <div className='inputs'>
                        <h1>Detalhes da feira</h1>
                        <DefaultInput
                            name="Nome da feira"
                            type="text"
                        />
                        <SpecialInput
                            name="cep"
                            label="CEP do local da feira"
                            mask="99999-999"
                            value={values.cep}
                            onChange={handleChange}
                        />
                        <DefaultInput
                            name="Horário de abertura"
                            type="time"
                        />
                        <DefaultInput
                            name="Horário de encerramento"
                            type="time"
                        />
                        <DefaultInput
                            name="Dias de funcionamento"
                            type="text"
                        />
                    </div>
                </div>
                <div className="photo-day-container">
                <div className="add-image-container">
                    <AddImage
                        text={'Adicione uma foto de perfil'} />
                </div>
                <div className='day-hour-container'>
                    <h2>Quando seus produtos serão vendidos nesta feira?</h2>
                    <DefaultInput
                        name="Dias de Venda"
                        type="text"
                    />
                    <DefaultInput
                        name="Horário de Funcionamento"
                        type="text"
                    />
                </div>
                </div>
            </div>
            <div className="button-container">
                <GreenButton text={'Adicionar'}/>
            </div>
       
            <Footer/>
        </div>

    )
}

export default AddFairPage