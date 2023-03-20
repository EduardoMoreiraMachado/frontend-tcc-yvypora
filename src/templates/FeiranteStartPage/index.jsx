import './style.css'

import { UserImage } from '../../components/UserImage'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import GreenAddIcon from '../../imgs/green_add_icon.svg'
import AddProductsIcon from '../../imgs/add_products_icon.png'
import AddFairsIcon from '../../imgs/add_fairs_icon.png'
import HeaderGreenWave from '../../imgs/header_green_wave.svg'

export const FeiranteStartPage = () => {
    return(
        <div className='feirante-start-page-container'>
            <header>
                <img src={HeaderGreenWave}/>
                <div className='user-image'>
                    <UserImage 
                        imgUrl="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
                    />
                </div>
            </header>
            <div className='page-content'>
                <NavBar />
                <div className='info-boxes'>
                    <div className='add-products-or-fairs'>
                        <h1>COMECE A FATURAR COM A YVYPORÃ HOJE!</h1>
                        <p>Adicione seus produtos ou cadastre as feiras as quais faz parte</p>
                        <div className='add-icons'>
                            <div className='add-products'>
                                <div id='products-add' className='green-add-icon'>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className='products-icon' src={AddProductsIcon} alt=""/>
                            </div>
                            <div className='add-fairs'>
                                <div id='fairs-add' className='green-add-icon'>
                                    <img src={GreenAddIcon} alt=""/>
                                </div>
                                <img className='fairs-icon' src={AddFairsIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FeiranteStartPage
