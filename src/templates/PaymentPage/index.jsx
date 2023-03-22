import "./style.css"
import { PrevButton } from "../../components/PrevButton"
import { GreenButton } from "../../components/GreenButton"
import { Title } from "../../components/Title"
import { Footer } from "../../components/Footer"
import { Option } from "../../components/Option"

export const PaymentPage = () =>{
    return(
        <div className="main-payment-container">
            <div className="options-payment-container">
                <div className="credit-card-container">
                    <p>Cartão de Crédito</p>
                    <Option text={"VISA"} 
                            imgUrl={"https://cdn-icons-png.flaticon.com/512/1/1863.png"}/>
                    <Option text={"Mastercard"} 
                            imgUrl={"https://logospng.org/wp-content/uploads/mastercard.jpg"}/>
                </div>
                <div className="others-container">
                    <p>Outros</p>
                    <Option  text={"PayPal"} imgUrl={"https://cdn-icons-png.flaticon.com/512/174/174861.png"}/>
                    <Option text={"ApplePay"} imgUrl={"https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg"}/>
                </div>
                <GreenButton text={"Adicionar"} type={"submit"}/>
            </div>
            <Footer/>
        </div>  
    )
}
export default PaymentPage