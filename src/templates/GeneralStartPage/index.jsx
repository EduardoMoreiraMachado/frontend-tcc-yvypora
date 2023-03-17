import './style.css';

import { useRef } from 'react';

import { NavBar } from '../../components/NavBar';
import { SignHeader } from '../../components/SignHeader';
import { ProductCategory } from '../../components/ProductCategory';
import { ProductCategorySelect } from '../../components/ProductCategorySelect';
import { SearchInput } from '../../components/SearchInput';
import { NextButton } from '../../components/NextButton';
import { PrevButton } from '../../components/PrevButton';
import { ShoppingItem } from '../../components/ShoppingItem';
import { Footer } from '../../components/Footer';
import { SearchInputHeader } from '../../components/SearchInputHeader';

export const GeneralStartPage = () => {
  const carousel = useRef(null);
  
  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div className='general-start-page-container'>
        <SearchInputHeader />
        <div className='page-content'>
          <NavBar />
          <div className='products-container'>
            <ProductCategory />
            <ProductCategorySelect />
            <div className='products-carrossel'>
              <PrevButton onClick={handleLeftClick}/>
                <div className='carousel-items' ref={carousel}>
                  <ShoppingItem 
                    name="Laranja 1"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={true}
                  />
                  <ShoppingItem 
                    name="Laranja 2"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={false}
                    
                  />
                  <ShoppingItem 
                    name="Laranja 3"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={true}
                  />
                  <ShoppingItem 
                    name="Laranja 4"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={false}
                  />
                  <ShoppingItem 
                    name="Laranja 5"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={false}
                  />
                  <ShoppingItem 
                    name="Laranja 6"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                  />
                  <ShoppingItem 
                    name="Laranja 7"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={false}
                  />
                  <ShoppingItem 
                    name="Laranja 8"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                  />
                  <ShoppingItem 
                    name="Laranja 9"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                  />
                  <ShoppingItem 
                    name="Laranja 10"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                  />
                  <ShoppingItem 
                    name="Laranja 11"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                    promo={false}
                  />
                  <ShoppingItem 
                    name="Laranja 12"
                    imgUrl="https://superprix.vteximg.com.br/arquivos/ids/175265-292-292/Laranja-pera.png?v=636299524396200000"
                    weight="100g"
                    price="5,00"
                  />
                </div>  
              <NextButton onClick={handleRightClick}/>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default GeneralStartPage;
