import styles from "./styles.module.css";
import UserCard from "../../components/UserCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Option from "../../components/Option";
import iconUser from "../../imgs/user.svg";
import iconMap from "../../imgs/map.svg";
import iconBag from "../../imgs/shopping_icon.png";
import { EmptyHeader } from "../../components/EmptyHeader";
import { Header } from "../../components/Header"
import { ExitOption } from "../../components/ExitOption";

import { useState } from "react";

export const ProfilePage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")));
  
  return (
    <div className={"profile-main"}>
      <div id={styles["empty-header"]}>
        <EmptyHeader />
      </div>
      <div id={styles["default-header"]}>
        <Header user={user.picture_uri} />
      </div>
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
        <div className={styles["options-container"]}>
          <Option imgUrl={iconUser} text={"Editar conta"} link={"/profile/update"} />
          <Option imgUrl={iconMap} text={"Endereços"} link={"/profile/address"} />
          {/* <Option imgUrl={iconCard} text={"Formas de Pagamento"} link={""} /> */}
          <Option imgUrl={iconBag} text={"Histórico de compras"} link={"/profile/purchase-history"}/>
          <ExitOption />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
