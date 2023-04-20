import styles from './style.module.css'
import { NavBar } from '../../components/NavBar'
import { Header } from '../../components/Header'
import Title from '../../components/Title'
import FairNearCard from '../../components/FairNearCard'
import { Footer } from '../../components/Footer'
import MenuBurguer from '../../components/MenuBurguer'
import { MyComponent } from '../../components/Maps'

export const FairNear = () => {
    return (
        <div className={styles['all-content-container']}>
            <MenuBurguer />
            <Header
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <Title text={'Feiras Próximas'} />
            <div className={styles["nav-card-container"]}>
                <NavBar />
                <div className={styles["map-container"]}>
                    <MyComponent/>
                    <div className={styles["cards"]}>
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                        <FairNearCard
                            title={'Feira Livre da Rua Oscar Freire'}
                            img={'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'}
                            note={3.5}
                            dayWorkText={'Domingo'}
                            hourWorkText={'08:00 - 16:00'}
                            fairmanText={'Aprox 4 feirantes cadastrados no yvy'}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default FairNear