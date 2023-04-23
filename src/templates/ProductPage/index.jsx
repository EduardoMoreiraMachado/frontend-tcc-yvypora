import styles from "./styles.module.css";

import { SignHeader } from "../../components/SignHeader";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

import StarsIconTest from "../../imgs/stars_icon_test.svg";
import AddCartIcon from "../../imgs/add_cart_icon.svg";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { getProduct } from "../../utils/fetchs/Costumer/products";

function calculateResult(num1, num2) {
  const result = (num1 * num2).toFixed(2);
  const updatedResult = result.toString().replace(/\./g, ",");
  return updatedResult;
}

export const ProductPage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [itemCount, setItemCount] = useState(1);
  const result = calculateResult(data?.price, itemCount);

  useEffect(() => {
    getProduct(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  const MainPage = () => (
    <div className={styles["product-page-container"]}>
      {user ? <Header user={user} /> : <SignHeader />}
      <div className={styles["product-containers"]}>
        <NavBar />
        <div className={styles["product-info"]}>
          <div className={styles["product-main"]}>
            <div
              className={styles["image-container"]}
              style={{
                backgroundImage: `url("${data.image_of_product[0].image.uri}")`,
              }}
            ></div>
            <div className={styles["texts"]}>
              <h1 className={styles["title"]}>{data.name}</h1>
              <div className={styles["review"]}>
                <img className={styles["stars"]} src={StarsIconTest} alt="" />
                <h2 className={styles["grade"]}>{data.review}</h2>
                <div className={styles["grade-info"]}>
                  {/* <h2 className={styles["review-count"]}>41 avaliações</h2> */}
                  <h2 className={styles["order-count"]}>
                    {data.order_count} pedidos
                  </h2>
                </div>
              </div>
              <span className={styles["user-name"]}>{data.marketer.name}</span>

              <div className={styles["price-result"]}>
                <h2 className={styles["unit"]}>
                  {data.available_quantity} {data.type_of_price.name}
                </h2>
                <div className={styles["price-amount"]}>
                  <h1 className={styles["price"]}>R$ {result}</h1>
                  <div className={"amount"}>
                    <button
                      className={"sub-button"}
                      onClick={() => {
                        itemCount > 0 && setItemCount(itemCount - 1);
                      }}
                    />
                    <h1 className={styles["number"]}>{itemCount}</h1>
                    <button
                      className={"add-button"}
                      onClick={() => setItemCount(itemCount + 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["product-footer"]}>
            <div className={styles["description"]}>
              <h1 className={styles["description-title"]}>Descrição</h1>
              <h2 className={styles["description-text"]}>{data.description}
              </h2>
            </div>
            <button className={styles["add-cart-button"]}>
              <img src={AddCartIcon} alt="" />
              <span>Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  return <>{data ? <MainPage /> : <Loading />}</>;
};

export default ProductPage;
