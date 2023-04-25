import styles from "./styles.module.css";
import UserCard from "../../components/UserCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Option from "../../components/Option";
import iconUser from "../../imgs/user.svg";
import iconMap from "../../imgs/map.svg";
import iconCard from "../../imgs/card.svg";
import iconBag from "../../imgs/bag.svg";
import { BurgerMenu } from "../../components/BurgerMenu";
import { EmptyHeader } from "../../components/EmptyHeader";
import { ExitOption } from "../../components/ExitOption";
import { useState } from "react";
// import { Header } from "../../components/Header"

export const ProfilePage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")));
  
  return (
    <div className={"profile-main"}>
      <BurgerMenu />
      {/* <Header 
                
            /> */}
      <EmptyHeader />
      <div className={styles["user-info"]}>
        <UserCard
          name={user.name}
          imgUrl={
            user.picture_uri
          }
          email={user.email}
        />
      </div>
      <div className={styles["profile-container"]}>
        <NavBar />
        <div className={"options-container"}>
          <Option imgUrl={iconUser} text={"Perfil"} link={"/profile/edit"} />
          <Option imgUrl={iconMap} text={"Endereço"} link="/profile/address" />
          <Option imgUrl={iconCard} text={"Formas de Pagamento"} link={""} />
          <Option
            imgUrl={iconBag}
            text={"Histórico de compra"}
            link={"/profile/buy-history"}
          />
          <ExitOption />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProfilePage;
