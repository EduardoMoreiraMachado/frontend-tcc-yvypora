import styles from './styles.module.css';

import AddProductIcon from '../../imgs/add_product_icon.svg';

import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { SellerProduct } from '../../components/SellerProduct';
import { Header } from '../../components/Header';
import { GreenButton } from '../../components/GreenButton';
import { DataNotFound } from '../../components/DataNotFound'

import { indexProducts } from '../../services/api/fetchs/marketer/productFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SellerProductsPage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [listOfProducts, setListOfProducts] = useState([]);
  const [onHoverBtn, setOnHoverBtn] = useState(false);
  const navigation = useNavigate();

  const handleNextPage = () => {
    navigation("/product/edit");
  }

  useEffect(() => {
    const fetch = async () => {
      const { data } = await indexProducts();
      setListOfProducts(data);
    };
    fetch().then().catch();
  }, []);

  return (
    <div className='seller-products-page-container'>
      <Header user={user} />
      <Title text='Produtos cadastrados' />
      {/* <div className={styles['float-button']}>
        {onHoverBtn && (
          <h2 className={styles['text-hidden']}>Adicionar produto</h2>
        )}
        <div
          className={styles['add-product-icon']}
          style={{backgroundImage: `url(${AddProductIcon})`}}
          onMouseEnter={() => setOnHoverBtn(true)}
          onMouseOut={() => setOnHoverBtn(false)}
        >
        </div>
      </div> */}
      <div className={styles['seller-products-content']}>
        {listOfProducts.length === 0 ?
          <div className={styles['history-not-found']}>
            <DataNotFound 
              text='Você ainda não tem produtos cadastrados!'
            />
          </div>
        :
          <div className={styles['registered-products']}>
            {listOfProducts.map((product) => {
              return (
                <SellerProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imgUrl={product.image_of_product[0]?.image.uri}
                  unit={product.available_quantity}
                  price={product.price}
                  available_quantity={product.available_quantity}
                  type_of_price={product.type_of_price.name}
                  status={product.active_for_selling}
                />
              );
            })}
          </div>
        }
        <GreenButton 
          text='Adicionar produto' 
          onClick={handleNextPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SellerProductsPage;
