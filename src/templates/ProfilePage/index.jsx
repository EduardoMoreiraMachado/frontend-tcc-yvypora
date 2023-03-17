import "./style.css"
import UserCard from "../../components/UserCard"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Option from "../../components/Option"
import iconUser from "../../imgs/user.svg"
import iconMap from "../../imgs/map.svg"
import iconCard from "../../imgs/card.svg"
import iconBag from "../../imgs/bag.svg"
import iconLogoff from "../../imgs/exportsquare.svg"


export const ProfilePage = () => {
    return (
        <div className="profile-main">
            <div className="user-info">
                <UserCard
                    name={'Carlos Arcanjo'}
                    imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
                    email={"carlaoprof@gmail.com"} />
            </div>

            <div className="profile-container">
                <NavBar/>
                <div className="options-container">
                    <Option imgUrl={iconUser} text={'Perfil'} />
                    <Option imgUrl={iconMap} text={'Endereço'} />
                    <Option imgUrl={iconCard} text={'Formas de Pagamento'} />
                    <Option imgUrl={iconBag} text={'Histórico de compra'} />
                    <Option imgUrl={iconLogoff} text={'Sair'} />
                </div>
            </div>
        <Footer/>
        </div>  
    )

}
export default ProfilePage