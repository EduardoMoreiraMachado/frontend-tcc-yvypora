import "./style.css"
import UserCard from "../../components/UserCard"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Option from "../../components/Option"
import iconUser from "../../imgs/user.svg"
import iconMap from "../../imgs/map.svg"
import iconCard from "../../imgs/card.svg"
import iconBag from "../../imgs/bag.svg"
import MenuBurguer from "../../components/MenuBurguer"
import { EmptyHeader } from "../../components/EmptyHeader"
import { ExitOption } from "../../components/ExitOption"


export const ProfilePage = () => {
    return (
        <div className="profile-main">
            <MenuBurguer/>
            <EmptyHeader />
            <div className="user-info">
                <UserCard
                    name={'Carlos Arcanjo'}
                    imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
                    email={"carlaoprof@gmail.com"} />
            </div>
            <div className="profile-container">
                <NavBar/>
                <div className="options-container">
                    <Option imgUrl={iconUser} text={'Perfil'} link={'/profile/edit'}/>
                    <Option imgUrl={iconMap} text={'Endereço'} link="/profile/address"/>
                    <Option imgUrl={iconCard} text={'Formas de Pagamento'} link={""}/>
                    <Option imgUrl={iconBag} text={'Histórico de compra'} link={'/profile/buy-history'}/>
                    <div id='exit'>
                        <ExitOption />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
    )

}
export default ProfilePage