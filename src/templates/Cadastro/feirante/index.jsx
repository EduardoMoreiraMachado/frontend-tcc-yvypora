import './style.css'
import { EmptyHeader } from '../../../components/EmptyHeader'
import {Title} from '../../../components/Title'
import { DefaultInput } from '../../../components/DefaultInput'
import{AddImage} from '../../../components/AddImage'
import { GreenButton } from '../../../components/GreenButton'
import { Footer } from '../../../components/Footer'
 

export const CadastroFeirant = () => {
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
                    <DefaultInput
                        name='CPF'
                        type='number'
                    />
                    <DefaultInput
                        name='Telefone'
                        type='number'
                    />
                    <DefaultInput
                        name='Nome do estabelecimento'
                        type='text'
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


export default CadastroFeirant