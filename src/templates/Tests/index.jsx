import './style.css'
// import { OrderSummary } from '../../components/OrderSummary'
// import { ShoppingItem } from '../../components/ShoppingItem'
// import { GreenButton } from '../../components/GreenButton'
// import { WhiteButton } from '../../components/WhiteButton'
// import { PaymentCard} from '../../components/PaymentCard'
// import NavBar from '../../components/NavBar'
import MenuBurguer from '../../components/MenuBurguer'
// import { handler } from 'daisyui'


console.log(window.screen.width)


export const Tests = () => {

    if(window.screen.width < 769 ){
        return(
          <MenuBurguer/>
        )
    }
    else{
        return(
            <div>
                <p>MENU</p>
            </div>
        )
    }
    
}


export default Tests