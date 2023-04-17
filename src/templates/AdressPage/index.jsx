import "./style.css"
import { Header } from "../../components/Header"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import AddressCard from "../../components/AddressCard"
import GreenButton from "../../components/GreenButton"
import Title from "../../components/Title"
import MenuBurguer from "../../components/MenuBurguer"

export const AdressPage = () => {
    return (
        <div className="main-address">
            <MenuBurguer/>
            {/* <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            /> */}
            <Title text={'Endereços'} />
            <div className="main-card-address">
                <NavBar />
                <div className="card-button-addres">
                    <div className="cards-container-address">
                        
                        <AddressCard
                            imgUrl={"https://visitepocosdecaldas.com.br/wp-content/uploads/2017/06/visite-pocos-de-caldas-002.jpg"}
                            title={"Casa"}
                            nameCostumer={"Carlos Arcanjo"}
                            emailCostumer={"carlaoprof@gmail.com"}
                            address={"Rua Oscar Freire nº126, São Paulo, São Paulo, Brasil"}
                            principalAddress={true}
                        />
                        <AddressCard
                            imgUrl={"https://visitepocosdecaldas.com.br/wp-content/uploads/2017/06/visite-pocos-de-caldas-002.jpg"}
                            title={"Casa"}
                            nameCostumer={"Carlos Arcanjo"}
                            emailCostumer={"carlaoprof@gmail.com"}
                            address={"Rua Oscar Freire nº126, São Paulo, São Paulo, Brasil"}
                            principalAddress={false}
                        />
                        <AddressCard
                            imgUrl={"https://visitepocosdecaldas.com.br/wp-content/uploads/2017/06/visite-pocos-de-caldas-002.jpg"}
                            title={"Casa"}
                            nameCostumer={"Carlos Arcanjo"}
                            emailCostumer={"carlaoprof@gmail.com"}
                            address={"Rua Oscar Freire nº126, São Paulo, São Paulo, Brasil"}
                            principalAddress={false}
                        />
                        <AddressCard
                            imgUrl={"https://visitepocosdecaldas.com.br/wp-content/uploads/2017/06/visite-pocos-de-caldas-002.jpg"}
                            title={"Casa"}
                            nameCostumer={"Carlos Arcanjo"}
                            emailCostumer={"carlaoprof@gmail.com"}
                            address={"Rua Oscar Freire nº126, São Paulo, São Paulo, Brasil"}
                            principalAddress={false}
                        />
                    </div>
                    <div className="button-adress-page">
                        <p>Adicione novos endereços clicando abaixo:</p>
                        <GreenButton text={"Adicionar"} type="button" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default AdressPage