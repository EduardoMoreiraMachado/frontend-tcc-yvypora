import "./style.css";

import { ShoppingItem } from "../../components/ShoppingItem";
import ProductsFilters from "../../components/ProductsFilters";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { useEffect, useState } from "react";
import { listByCategory } from "../../utils/fetchs/Costumer/products";
export const SearchPage = ({ search_key, category }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-details"))
  );

  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    if (!category) return;

    const fetch = async () => {
      const data = await listByCategory(category);
      setListOfProducts(data);
    };

    fetch().then();
  }, [category]);


  useEffect(() => {
    if (!search_key) return

    // TODO 
  })

  return (
    <>
      <Header user={user}></Header>
      <div className="text-input-wrapper">
        <SearchInput />
      </div>
      <div className="all-container">
        <div className="main-content-container">
          <div className="result-search">
            <p> Resultados de: {search_key}</p>
            <div className="cards-result">
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                weight="100g"
                price="5,00"
                promo={true}
              />
            </div>
          </div>
          {/* <FiltersSearch/> */}
          <ProductsFilters />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SearchPage;
