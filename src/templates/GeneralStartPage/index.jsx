import styles from "./styles.module.css";

import { useRef, useState, useEffect } from "react";

import { NavBar } from "../../components/NavBar";
import { SignHeader } from "../../components/SignHeader";
import { Header } from "../../components/Header";
import { ProductCategory } from "../../components/ProductCategory";
import { ProductCategorySelect } from "../../components/ProductCategorySelect";
import { NextButton } from "../../components/NextButton";
import { PrevButton } from "../../components/PrevButton";
import { ShoppingItem } from "../../components/ShoppingItem";
import { Footer } from "../../components/Footer";
import { SearchInput } from "../../components/SearchInput";
import MenuBurguer from "../../components/MenuBurguer";
import {
  listProductNearToClient,
  listProducts,
  listProductsInSaleOff,
} from "../../utils/fetchs/Costumer/products";
import { getDetails } from "../../utils/fetchs/common/user";

export const GeneralStartPage = () => {
  const [user, setUser] = useState("");
  const [listOfProducts, setListOfProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const carousel = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  useEffect(() => {
    function checkUserData() {
      const details = localStorage.getItem("user-details");
      const token = localStorage.getItem("user-logged-token");

      if (details) {
        setUser(JSON.parse(details));
      }
      if (token && !details) {
        const fetch = async () => {
          const details = await getDetails();

          localStorage.setItem("user-detais", JSON.stringify(details));

          setUser(details);
        };

        fetch().then();
      }
    }

    checkUserData();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const products = await listProducts();
      console.log(products);

      setListOfProducts(products);
    };
    fetch().then();
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleCategorySelect = async ({ target }) => {
    const { id } = target;

    console.log(id, selectedCategory);

    if (selectedCategory === id) return;

    if (id === "all") {
      const newList = await listProducts();
      setListOfProducts(newList);
    } else if (id === "discount") {
      const newList = await listProductsInSaleOff();
      setListOfProducts(newList);
    } else if (id === "close") {
      const newList = await listProductNearToClient();
      setListOfProducts(newList);
    }

    setSelectedCategory(id);
  };

  useEffect(() => {
    const input = document.querySelector(".text-input");
    if (isInputFocused) {
      if (input) input.style.zIndex = "4";
    } else {
      if (input) input.style.zIndex = "1";
    }
  }, [isInputFocused]);

  return (
    <div className={styles["general-start-page-container"]}>
      <div className={isInputFocused ? styles["background"] : ""} />
      <MenuBurguer />
      {user ? (
        <>
          <Header user={user}></Header>
        </>
      ) : (
        <>
          <SignHeader></SignHeader>
        </>
      )}
      <div className={styles["page-content"]}>
        <NavBar />
        <div className={styles["products-container"]}>
          <div className={styles["search-category"]}>
            <div className={styles["general-search"]}>
              <SearchInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <ProductCategory />
          </div>
          <ProductCategorySelect onClick={handleCategorySelect} />
          <div className={styles["products-carrossel"]}>
            <PrevButton onClick={handleLeftClick} />
            <div className={styles["carousel-items"]} ref={carousel}>
              {listOfProducts.map((product) => {
                console.log(product);
                return (
                  <ShoppingItem
                    name={product.name}
                    imgUrl={product.image_of_product.map((el) => el.image.uri)}
                    weight="100g"
                    price={product.price}
                    key={product.id}
                  />
                );
              })}
            </div>
            <NextButton onClick={handleRightClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneralStartPage;
