import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { GainsCard } from '../../components/GainsCard'
import { Chart } from '../../components/Chart'

/****************************************************************************************
*  os valores de porcentagem já estão com cores diferentes para negativos e positivos
*  os valores de dinheiro já estão com a substituição de ponto por vírgula ("." para ",")
****************************************************************************************/
export const GainsPage = () => {
    // valor da porcentagem de ganho MENSAL (os outros valores estão no componente 'GainsCard')
    const percentageValue = -9
    const percentageColor = percentageValue > 0 ? '#74A34C' : 'brown';

    // valor do dinheiro total MENSAL (os outros valores estão no componente 'GainsCard')
    const moneyValue = 3050.60;
    const processedMoneyValue = moneyValue.toString().replace(/\./g, ","); 

    // quando o valor da porcentagem for positivo, esta variável adiciona o símbolo "+"
    const valueSymbol = percentageColor == '#74A34C' ? '+' : '';

    return(
        <div className={styles['gains-page-container']}>
            <Header user={{picture_uri:""}} />
            <Title text="Relatório de ganhos e vendas"/>
            <div className={styles['gains-content']}>

                <div className={styles['gains']}>

                    <h1 id={styles['container-title']}>Ganhos</h1>

                    <GainsCard 
                        text='Hoje'
                        value={120.50}
                        percentage={10}
                    />

                    <GainsCard 
                        text='Semanal'
                        value={850.60}
                        percentage={-5}
                    />

                </div>

                <div className={styles['monthly']}>
                    <h1>Mensal</h1>
                    <Chart />
                    <h2 id={styles['total']}>Total</h2>
                    <div className={styles['value']}>
                        <h2>R$ {processedMoneyValue}</h2>
                        <span>
                            <span style={{color: percentageColor}}>{valueSymbol}{percentageValue}%</span> vs último mês
                        </span>
                    </div>
                </div>

                <div className={styles['sales']}>
                    <h1 id={styles['container-title']}>Vendas</h1>
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
