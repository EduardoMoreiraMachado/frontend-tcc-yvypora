import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Chart } from '../../components/Chart'

export const GainsPage = () => {
    return(
        <div className={styles['gains-page-container']}>
            <Header user={{picture_uri:""}} />
            <Title text="Relatório de ganhos e vendas"/>
            <div className={styles['gains-content']}>

                <div className={styles['gains']}>
                    <h1>Ganhos</h1>
                    <div className={styles['today']}>
                        <h1>Hoje</h1>
                        <div className={styles['value']}>
                            <h2>R$ 120,00</h2>
                            <span>+10% vs ontem</span>
                        </div>
                    </div>
                    <div className={styles['weekly']}>
                        <h1>Semanal</h1>
                        <div className={styles['value']}>
                            <h2>R$ 850,60</h2>
                            <span>+5% vs semana passada</span>
                        </div>
                    </div>
                </div>

                <div className={styles['monthly']}>
                    <h1>Mensal</h1>
                    <Chart />
                    <h2>Total</h2>
                    <div className={styles['value']}>
                        <h2>R$ 3050,60</h2>
                        <span>+9% vs último mês</span>
                    </div>
                </div>

                <div className={styles['sales']}>
                    <h1>Vendas</h1>
                    <div className={styles['today']}>
                        <h1>Hoje</h1>
                        <h2>30</h2>
                    </div>
                    <div className={styles['weekly']}>
                        <h1>Semanal</h1>
                        <h2>123</h2>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default GainsPage
