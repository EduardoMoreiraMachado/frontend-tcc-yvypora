import styles from "./styles.module.css";

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { NavBar } from "../../components/NavBar";
import { FairNearCard } from "../../components/FairNearCard";
import { Maps } from "../../components/Maps";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { listByCloseFairs } from "../../utils/fetchs/Costumer/fairs";

export const NearbyFairs = () => {
  const [fairs, setFairs] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      localStorage.setItem("location", JSON.stringify(location));
    }
  }, [location]);

  useEffect(() => {
    if (location && !fairs) listByCloseFairs(location).then((data) => setFairs(data));
    console.info(fairs);
  }, [location, fairs]);

  return (
    <div className={styles["nearby-fairs-container"]}>
      <Header user={JSON.parse(localStorage.getItem("user-details"))} />
      <Title text="Feiras próximas" />
      <div className={styles["nearby-fairs-content"]}>
        <NavBar />
        <div className={styles["fairs"]}>
          <div className={styles["cards"]}>
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
            <FairNearCard
              title={"Feira Livre da Rua Oscar Freire"}
              img={
                "https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg"
              }
              note={3.5}
              dayWorkText={"Domingo"}
              hourWorkText={"08:00 - 16:00"}
              fairmanText={"Aprox 4 feirantes cadastrados no yvy"}
            />
          </div>
          <div className={styles["map-container"]}>
            <Maps />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NearbyFairs;
