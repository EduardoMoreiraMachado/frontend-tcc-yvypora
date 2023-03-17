import './style.css'

import { UserImage } from '../../components/UserImage'
import { NavBar } from '../../components/NavBar'

import AddProductsIcon from '../../imgs/add_products_icon.svg'
import AddFairsIcon from '../../imgs/add_fairs_icon.svg'

export const FeiranteStartPage = () => {
    return(
        <div className='feirante-start-page-container'>
            <header>
                <UserImage 
                    imgUrl="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
                />
            </header>
            <div className='page-content'>
                <NavBar />
                <div className='add-products-or-fairs'>
                    <h1>COMECE A FATURAR COM A YVYPORÃ HOJE!</h1>
                    <p>Adicione seus produtos ou cadastre as feiras as quais faz parte</p>
                    <div className='add-icons'>
                        <img src={AddProductsIcon} alt=""/>
                        <img src={AddFairsIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeiranteStartPage
