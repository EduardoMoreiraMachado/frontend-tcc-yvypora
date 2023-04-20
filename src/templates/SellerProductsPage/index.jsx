import styles from "./styles.module.css";

import { Footer } from "../../components/Footer";
import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";
import AddProductIcon from "../../imgs/add_product_icon.svg";
import { Title } from "../../components/Title";
import { SellerProduct } from "../../components/SellerProduct";
import { useEffect, useState } from "react";
import { indexProducts } from "../../utils/fetchs/Marketer/productFetch";
import Header from "../../components/Header";

export const SellerProductsPage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")));
  const [listOfProducts, setListOfProducts] = useState([]);
  const [onHoverBtn, setOnHoverBtn] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await indexProducts();
      setListOfProducts(data);
    };
    fetch().then().catch();
  }, []);

  return (
    <div className="seller-products-page-container">
      <Header user={user}></Header>
      <div className={styles["float-button"]}>
        {onHoverBtn && (<h2 className={styles["text-hidden"]}>Adicionar Produto</h2>)}
        <img
          className={styles["add-product-icon"]}
          src={AddProductIcon}
          alt=""
          onMouseEnter={() => setOnHoverBtn(true)}
          onMouseOut={() => setOnHoverBtn(false)}
        />
      </div>

      <div className={styles["registered-products"]}>
        {listOfProducts.map((product) => {
          console.log(product);
          return (
            <SellerProduct
              name={product.name}
              imgUrl={product.image_of_product[0]?.image.uri}
              unit={product.available_quantity}
              price={product.price}
              available_quantity={product.available_quantity}
              type_of_price={product.type_of_price.name}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SellerProductsPage;
