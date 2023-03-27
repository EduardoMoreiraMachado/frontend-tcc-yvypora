import './style.css'
// import { OrderSummary } from '../../components/OrderSummary'
// import { ShoppingItem } from '../../components/ShoppingItem'
// import { GreenButton } from '../../components/GreenButton'
// import { WhiteButton } from '../../components/WhiteButton'
// import { PaymentCard} from '../../components/PaymentCard'
// import NavBar from '../../components/NavBar'
import MenuBurguer from '../../components/MenuBurguer'
import { useEffect, useState } from 'react'
// import { handler } from 'daisyui'


console.log(window.screen.width)


export const Tests = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
      
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

    if(windowWidth < 769 ){
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