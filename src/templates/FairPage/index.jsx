import styles from './styles.module.css';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { NavBar } from "../../components/NavBar";
import { Fair } from "../../components/Fair";
import { GreenButton } from "../../components/GreenButton";

import { useEffect, useState } from "react";

export const FairPage = () => {
  const [fairs, setFairs] = useState([]);
  
  useEffect(() => {}, []);

  return (
    <div className="registered-fairs-page">
      <Header 
          imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
      />
      <div className="fairs-content">
        <NavBar />
        <div className="fairs-list">
          <Title text="Feiras" />
          <div className="fairs">
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
            <Fair
              imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
              name="Feira do Brother"
              days="Terça e Quinta"
              hours="07:30 até as 12:00"
            />
          </div>
          <div id="add-fair-button">
            <GreenButton text="Adicionar feira" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FairPage;
