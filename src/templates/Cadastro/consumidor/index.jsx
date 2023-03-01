import './style.css'
import { Footer } from '../../../components/Footer'
import { EmptyHeader } from '../../../components/EmptyHeader'
import { DefaultInput } from '../../../components/DefaultInput'
import { GreenButton } from '../../../components/GreenButton'

import Title from '../../../components/Title'
import AddImage from '../../../components/AddImage'


export const CadastroConsu = () => {
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
                    <DefaultInput
                        name='CPF'
                        type='number'
                    />
                    <DefaultInput
                        name='CEP'
                        type='number'
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


export default CadastroConsu