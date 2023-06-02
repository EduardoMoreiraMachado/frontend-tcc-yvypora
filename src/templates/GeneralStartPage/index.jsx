import styles from './styles.module.css';

import { useRef, useState, useEffect, forwardRef } from 'react';

import { NavBar } from '../../components/NavBar';
import { SignHeader } from '../../components/SignHeader';
import { Header } from '../../components/Header';
import { ProductCategory } from '../../components/ProductCategory';
import { ProductCategorySelect } from '../../components/ProductCategorySelect';
import { NextButton } from '../../components/NextButton';
import { PrevButton } from '../../components/PrevButton';
import { ShoppingItem } from '../../components/ShoppingItem';
import { Footer } from '../../components/Footer';
import { SearchInput } from '../../components/SearchInput';
import { DataNotFound } from '../../components/DataNotFound';
import { motion } from 'framer-motion';
import InitialTransition from '../../animations/Initial';

import {
  listProductNearToClient,
  listProducts,
  listProductsInSaleOff,
} from '../../services/api/fetchs/costumer/products';
import { getDetails } from '../../services/api/fetchs/common/user';
import { useNavigate } from 'react-router-dom';

export const GeneralStartPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [genericList, setListOfProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const carousel = useRef(null);
  const searchInputRef = useRef(null);

  const [weightName, setWeightName] = useState('');

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const { target } = event;
      const { value } = target;
      setListOfProducts([]);
      navigate('/search', { state: { context: value } });
    }
  };

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  useEffect(() => {
    function checkUserData() {
      const details = localStorage.getItem('user-details');
      const token = localStorage.getItem('user-logged-token');

      if (details) {
        setUser(JSON.parse(details));
      }
      if (token && !details) {
        const fetch = async () => {
          const details = await getDetails();

          localStorage.setItem('user-detais', JSON.stringify(details));

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

    if (id === 'all') {
      const newList = await listProducts();
      setListOfProducts([]);
      console.log(newList);
      setListOfProducts(newList);
    } else if (id === 'discount') {
      const newList = await listProductsInSaleOff();
      console.log(newList);
      setListOfProducts([]);

      setListOfProducts(newList);
    } else if (id === 'close') {
      const newList = await listProductNearToClient();
      console.log(newList);
      setListOfProducts([]);

      setListOfProducts(newList);
    }

    setSelectedCategory(id);
  };

  useEffect(() => {
    if (inputFocused) {
      console.log(inputFocused);
      if (searchInputRef.current) searchInputRef.current.style.zIndex = '100';
    } else {
      if (searchInputRef.current) searchInputRef.current.style.zIndex = '-1';
    }
  }, [inputFocused]);

  return (
    <div
      initial={{
        y: 500,
      }}
      animate={{
        y: 0,
        transition: {
          easing: 'ease-in-out',
          duration: 1,
        },
      }}
      className={styles['general-start-page-container']}
    >
      <InitialTransition />

      <div className={inputFocused ? styles['background'] : ''} />
      {user ? (
        <>
          <Header user={user} />
        </>
      ) : (
        <>
          <SignHeader />
        </>
      )}
      <div className={styles['page-content']}>
        {user &&
          <NavBar />
        }
        <div className={styles['products-container']}>
          <div className={styles['search-category']}>
            <div className={styles['general-search']}>
              <SearchInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={onKeyDown}
              />
            </div>
            <ProductCategory />
          </div>
          <ProductCategorySelect onClick={handleCategorySelect} />
          {genericList.length === 0 ? 
            <DataNotFound 
              text='Produtos não encontrados!'
            /> 
            :
            <div className={styles['products-carrossel']}>
              <PrevButton onClick={handleLeftClick} />
              <div className={styles['carousel-items']} ref={carousel}>
                {genericList.map((product) => {
                  if (genericList.length === 0) {
                    return <h1>Que pena! Não há feiras ativas no momento.</h1>;
                  } else {
                    console.log(product.discount);
                    return (
                      <ShoppingItem
                        availableQuantity={product?.available_quantity}
                        fairName={
                          product?.marketer?.tent_name
                            ? product.marketer.tent_name
                            : ''
                        }
                        marketerId={
                          product?.marketer?.id ? product.marketer.id : 0
                        }
                        marketerName={
                          product?.marketer?.name ? product.marketer.name : ''
                        }
                        fairPicture={
                          product?.marketer?.picture_uri
                            ? product.marketer.picture_uri
                            : ''
                        }
                        cartId={product.id}
                        id={product.id}
                        promo={product.discount}
                        name={product.name}
                        imgUrl={product.image_of_product.map(
                          (el) => el.image.uri
                        )}
                        weight={`${product.available_quantity} ${product.type_of_price.name}`}
                        price={product.price}
                        key={product.id}
                      />
                    );
                  }
                })}
              </div>
              <NextButton onClick={handleRightClick} />
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneralStartPage;
