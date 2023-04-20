import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { NavBar } from '../../components/NavBar'
import { GreenButton } from '../../components/GreenButton'
import { Footer } from '../../components/Footer'

export const AddressPage = () => {
    return(
        <div className={styles['address-page-container']}>
            
            <Title
                text='Endereços' 
            />
            <div className={styles['address-page-content']}>
                <NavBar />
                <div className={styles['address-content']}>
                    <div className={styles['address-list']}>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div className={styles["address-card"]}>
                            <div className={styles["main-address-card"]}>
                                <span>Endereço principal</span>
                            </div>
                            <div className={styles["address-info"]}>
                                <h1>Casa</h1>
                                <p>Avenida Paulista nº1473, São Paulo, São Paulo, Brasil</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles['add-address-button']}>
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
