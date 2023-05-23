import styles from './styles.module.css';

import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import GreenAddIcon from '../../imgs/green_add_icon.svg';
import AddProductsIcon from '../../imgs/add_products_icon.png';
import AddFairsIcon from '../../imgs/add_fairs_icon.png';
import EyeVisible from '../../imgs/eye_visible.png';
import EyeNotVisible from '../../imgs/eye_not_visible.png';
import ReportsFetch from '../../services/api/fetchs/marketer/ReportsFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FeiranteStartPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [dailySell, setDailySell] = useState(0);
  const [lastSell, setLastSell] = useState(null);

  const navigation = useNavigate();

  const getDay = async () => {
    const res = await ReportsFetch.getDailyEaringA();
    return { data: res.pop(), sell: res.splice(-2).pop() };
  };

  useEffect(() => {
    getDay().then(({ data, sell }) => {
      if (sell) {
        const date = new Date(sell.created_at);
        const time = `${date.getHours()}:${
          date.getMinutes().toString().length === 1
            ? '0' + date.getMinutes().toString()
            : date.getMinutes()
        }`;
        const value = (sell.total / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',');
        setLastSell({
          time,
          value,
        });
        console.log('sem vendas ainda');
      }
      setDailySell(data._sum.total.toFixed(2).toString().replace('.', ','));
    });
  }, []);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  const handleNextPage = (path) => {
    navigation(path);
  };

  return (
    <div className={styles['feirante-start-page-container']}>
      <Header user={{ picture_uri: '' }} />
      <div className={styles['page-content']}>
        <div className={styles['nav-bar']}>
          <NavBar />
        </div>
        <div className={styles['info-boxes']}>
          <div className={styles['add-products-or-fairs']}>
            <h1>COMECE A FATURAR COM A YVYPORÃ HOJE!</h1>
            <p>
              Adicione seus produtos ou cadastre as feiras as quais faz parte
            </p>
            <div className={styles['add-icons']}>
              <div
                className={styles['add-products']}
                onClick={() => {
                  handleNextPage('/product/edit');
                }}
              >
                <div
                  id={styles['products-add']}
                  className={styles['green-add-icon']}
                >
                  <img src={GreenAddIcon} alt='' />
                </div>
                <img
                  className={styles['products-icon']}
                  src={AddProductsIcon}
                  alt=''
                />
              </div>
              <div
                className={styles['add-fairs']}
                onClick={() => {
                  handleNextPage('/fair/add-fair');
                }}
              >
                <div
                  id={styles['fairs-add']}
                  className={styles['green-add-icon']}
                >
                  <img src={GreenAddIcon} alt='' />
                </div>
                <img
                  className={styles['fairs-icon']}
                  src={AddFairsIcon}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className={styles['feirante-activity']}>
            <div className={styles['half-historic']}>
              <h1>Sua atividade hoje</h1>
              <h2>Ganhos</h2>
              <div className={styles['money-visibility']}>
                <h1
                  style={
                    isVisible
                      ? { color: '#245501' }
                      : { color: 'transparent', backgroundColor: '#6661' }
                  }
                >
                  R$ {dailySell}
                </h1>
                <button
                  onClick={toggleVisibility}
                  style={
                    isVisible
                      ? { backgroundImage: `url(${EyeNotVisible})` }
                      : { backgroundImage: `url(${EyeVisible})` }
                  }
                />
              </div>
              {lastSell && (
                <div className={styles['sales']}>
                  <h3>Venda às {lastSell.time}</h3>
                  <span>R$ {lastSell.value}</span>
                </div>
              )}
            </div>
            <div
              className={styles['all-history-button']}
              onClick={() => {
                handleNextPage('/gains');
              }}
            >
              <h1>Ver histórico completo</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeiranteStartPage;
