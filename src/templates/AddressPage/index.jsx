import './style.css'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { NavBar } from '../../components/NavBar'
import { GreenButton } from '../../components/GreenButton'

export const AddressPage = () => {
    return(
        <div className='address-page-container'>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <Title />
            <div className='address-page-content'>
                <NavBar />
                <div className='address-content'>
                    <div className='address-list'>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                    </div>
                    <GreenButton 
                        text='Adicionar'
                    />
                </div>
            </div>
        </div>
    )
}

export default AddressPage
