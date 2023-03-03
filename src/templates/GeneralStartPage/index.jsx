import './style.css';

import { NavBar } from '../../components/NavBar';
import { SignHeader } from '../../components/SignHeader';
import { ProductCategory } from '../../components/ProductCategory';
import { ProductCategorySelect } from '../../components/ProductCategorySelect';
import { SearchInput } from '../../components/SearchInput'
import { NextButton } from '../../components/NextButton'
import { PrevButton } from '../../components/PrevButton'
import { ShoppingItem } from '../../components/ShoppingItem'
import { Footer } from '../../components/Footer';

export const GeneralStartPage = () => {
  return (
    <div className='general-start-page-container'>
        <SignHeader />
        <div className='page-content'>
          <NavBar />
          <div className='products-container'>
            <SearchInput />
            <ProductCategory />
            <ProductCategorySelect />
            <div className='products-carrossel'>
              <PrevButton />
                <ShoppingItem 
                  name="Laranja"
                  imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                  weight="100g"
                  price="5,00"
                />
                <ShoppingItem 
                  name="Laranja"
                  imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                  weight="100g"
                  price="5,00"
                />
                <ShoppingItem 
                  name="Laranja"
                  imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                  weight="100g"
                  price="5,00"
                />
              <NextButton />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default GeneralStartPage;
