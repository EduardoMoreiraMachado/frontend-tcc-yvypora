import styles from './style.module.css';

import { Footer } from "../../components/Footer";
import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";
import AddProductIcon from "../../imgs/add_product_icon.svg";
import { Title } from "../../components/Title";
import { SellerProduct } from "../../components/SellerProduct";
import { useEffect, useState } from "react";
import { indexProducts } from "../../utils/fetchs/Marketer/productFetch";

export const SellerProductsPage = () => {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await indexProducts();
      setListOfProducts(data);
    };
    fetch().then().catch();
  }, []);

  return (
    <div className={styles["seller-products-page-container"]}>
      <header>
        <img className={styles["text-icon"]} src={YvyporaTextIcon} alt="" />
        <Title text="Meus produtos" />
        <img className={styles["add-product-icon"]} src={AddProductIcon} alt="" />
      </header>
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
