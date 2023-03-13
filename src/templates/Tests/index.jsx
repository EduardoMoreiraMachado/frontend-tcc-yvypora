import './style.css'
import { OrderSummary } from '../../components/OrderSummary'
import { ShoppingItem } from '../../components/ShoppingItem'




export const Tests = () => {
    return (
       <>
        <ShoppingItem
        name='abobrinha'
        imgUrl = 'https://tempodecozimento.com.br/wp-content/uploads/2017/10/abobrinha.jpg'
        weight='20'
        price='40'
        promo={true}/>

        <ShoppingItem
        name='abobrinha'
        imgUrl = 'https://tempodecozimento.com.br/wp-content/uploads/2017/10/abobrinha.jpg'
        weight='20'
        price='40'
        promo={true}/>
       </>

       
    )
}


export default Tests