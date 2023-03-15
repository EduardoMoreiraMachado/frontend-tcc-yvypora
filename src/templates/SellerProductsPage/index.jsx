import './style.css'

import { Footer } from '../../components/Footer'
import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'
import AddProductIcon from '../../imgs/add_product_icon.svg'
import { Title } from '../../components/Title'
import { SellerProduct } from '../../components/SellerProduct'
 
export const SellerProducts = () => {
    return(
        <div className='seller-products-page-container'>
            <header>
                <img className='text-icon' src={YvyporaTextIcon} alt=""/>
                <Title 
                    text="Meus produtos"
                />
                <img className='add-product-icon' src={AddProductIcon} alt=""/>
            </header>
            <div className='registered-products'>
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
                <SellerProduct 
                    name="Abóbora"
                    imgUrl="https://billsberryfarm.com/wp-content/uploads/2020/08/pumpkin-1.png"
                    unit="1"
                    price="8,00"
                />
            </div>
            <Footer />
        </div>
    )
}

export default SellerProducts