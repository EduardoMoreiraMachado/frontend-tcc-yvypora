import styles from "./styles.module.css";
import UserCard from "../../components/UserCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Option from "../../components/Option";
import iconUser from "../../imgs/user.svg";
import iconFair from "../../imgs/fair_icon.svg";
import iconGains from "../../imgs/gains_icon.svg";
import iconBag from "../../imgs/shopping_icon.png";
import { EmptyHeader } from "../../components/EmptyHeader";
import { ExitOption } from "../../components/ExitOption";
import { useState } from "react";

export const ProfilePage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")));
  
  return (
    <div className={"profile-main"}>
      <EmptyHeader />
      <div className={styles['user-info']}>
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
          <Option imgUrl={iconFair} text={"Feiras"} link="/fair/fairs" />
          <Option imgUrl={iconGains} text={"Relatório de ganhos"} link={"/gains"} />
          <Option imgUrl={iconBag} text={"Histórico de vendas"} link={"/profile/sales-history"} />
          <ExitOption />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
