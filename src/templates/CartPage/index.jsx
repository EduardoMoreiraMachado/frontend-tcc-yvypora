import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { NavBar } from "../../components/NavBar";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { groupByMarketer } from "../../utils/groupBy";

export const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [displayCart, setDisplayCart] = useState([]);

  useEffect(() => {
    const aggroupedData = groupByMarketer(cart.products);
    setDisplayCart(aggroupedData);
  }, [cart]);

  return (
    <div className={styles["cartpage-container"]}>
      <Title text={"Meu Carrinho"} />
      <div className={styles["main-container-cart"]}>
        <NavBar />
        <div className={styles["card-payment-container"]}>
          <div className={styles["card-cart-container"]}>
            <div className={styles["card-cart"]}>
              <div className={styles["main-purchase-info"]}>
                {Object.entries(displayCart).map(([name, purchase]) => {
                  return (
                    <>
                      <div
                        className={styles["purchase-image"]}
                        style={{
                          backgroundImage: `url('${purchase[0].fairPicture}')`,
                        }}
                      ></div>
                      <div className={styles["purchase-info"]}>
                        <h1>{name}</h1>
                        <h2>{purchase[0].fairName}</h2>
                        {<span>Data: 41/13/2027</span>}
                      </div>
                    </>
                  );
                })}
              </div>
              <ShoppingCartItem
                name={"Abobora"}
                imgUrl={
                  "https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
                }
                unit={8591}
                price={2.5}
              />
              <ShoppingCartItem
                name={"Abobora"}
                imgUrl={
                  "https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
                }
                unit={8591}
                price={2}
              />
              <ShoppingCartItem
                name={"Abobora"}
                imgUrl={
                  "https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
                }
                unit={8591}
                price={9.09}
              />
              <ShoppingCartItem
                name={"Abobora"}
                imgUrl={
                  "https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
                }
                unit={8591}
                price={9.09}
              />
            </div>
          </div>
          <div className={styles["payment-card"]}>
            <h1>Resumo do pedido</h1>
            <div className={styles["total-payment"]}>
              <span>TOTAL:</span>
              <h2>R$ 48,00</h2>
            </div>
            <button>Pagar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
