import styles from './style.module.css'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { NavBar } from '../../components/NavBar'
import { GreenButton } from '../../components/GreenButton'
import { Footer } from '../../components/Footer'

export const AddressPage = () => {
    return(
        <div className='address-page-container'>
            
            <Title
                text='Endereços' 
            />
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

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className="address-card">
                            <div className="main-address-card">
                                <span>Endereço principal</span>
                            </div>
                            <div className="address-info">
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

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
                    <div className='add-address-button'>
                        <GreenButton 
                            text='Adicionar'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddressPage
