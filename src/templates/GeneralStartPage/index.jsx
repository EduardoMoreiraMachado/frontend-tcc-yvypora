import './style.css';

import { useRef, useState } from 'react';


import { NavBar } from '../../components/NavBar';
import { SignHeader } from '../../components/SignHeader';
import { ProductCategory } from '../../components/ProductCategory';
import { ProductCategorySelect } from '../../components/ProductCategorySelect';
import { NextButton } from '../../components/NextButton';
import { PrevButton } from '../../components/PrevButton';
import { ShoppingItem } from '../../components/ShoppingItem';
import { Footer } from '../../components/Footer';
import { SearchInput } from '../../components/SearchInput'

import MenuBurguer from '../../components/MenuBurguer';

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
      <SignHeader />
      <div className='page-content'>
        <NavBar />  
        <div className='products-container'>
          <div className='search-category'>
            <div className='general-search'>
                <SearchInput />
            </div>
            <ProductCategory />
          </div>
          <ProductCategorySelect />
          <div className='products-carrossel'>
            <PrevButton onClick={handleLeftClick} />
            <div className='carousel-items' ref={carousel}>
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
              <ShoppingItem
                name="Laranja 1"
                imgUrl="http://chc.org.br/wp-content/uploads/2014/02/laranjas.jpg"
                weight="100g"
                price="5,00"
                promo={true}
              />
            </div>
            <NextButton onClick={handleRightClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GeneralStartPage;
