import Title from '../../components/Title'
import Chart from '../../components/Chart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import GainsCard from '../../components/GainsCard'
import styles from './styles.module.css'

export const GainsPage = () => {
    return (
        <div className={styles["gains-main-container"]}>
             <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <Title text={'Relatório de ganhos/vendas'} />
            <div className={styles["cards-gain"]}>
                <div className={styles["daily-mensal-sales"]}>
                    <GainsCard title="Hoje" data={"R$120.85"} />
                    <GainsCard title="Semanal" data={"R$850.85"} />
                </div>
                <div className={styles["card-chart"]}>
                    <GainsCard title="Mensal" data={"R$3120.85"} />
                    <Chart/>
                </div>

                <div className={styles["sales-container"]}>
                    <p className={styles['sales-container-title']}>Vendas</p>
                    <div className={styles["sales-card"]}>
                        <GainsCard title="Hoje" data={30} />
                        <GainsCard title="Semanal" data={130} />
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}
export default GainsPage