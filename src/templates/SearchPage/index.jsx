import "./style.css";

import { ShoppingItem } from "../../components/ShoppingItem";
import ProductsFilters from "../../components/ProductsFilters";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
export const SearchPage = ({ name }) => {
  return (
    <>
      <Header></Header>
      <div className="text-input-wrapper">
        <SearchInput />
      </div>
      <div className="all-container">
        <div className="main-content-container">
          <div className="result-search">
            <p> Resultados de: {name}</p>
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
