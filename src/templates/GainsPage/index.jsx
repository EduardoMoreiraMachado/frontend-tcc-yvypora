import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { GainsCard } from '../../components/GainsCard';
import { Chart } from '../../components/Chart';
import { useEffect, useState } from 'react';

import ReportsFetch from '../../services/api/fetchs/marketer/ReportsFetch';
/****************************************************************************************
 *  os valores de porcentagem já estão com cores diferentes para negativos e positivos
 *  os valores de dinheiro já estão com a substituição de ponto por vírgula ("." para ",")
 ****************************************************************************************/
export const GainsPage = () => {
  const [total, setTotal] = useState(0);
  const [sells, setSells] = useState([]);
  const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [sellsDetails, setSellsDetails] = useState({

    // TODO 
    today: {
      value: 0,
      count: 0,
    },
    week: {
      value: 0,
      count: 0,
    }
  })

  useEffect(() => {
    const fetch = async () => {
      const data = await ReportsFetch.getMonthEaring();
      console.log(data)
      const _counts = data.pop();
      console.log("counts", _counts)
      setTotal(_counts._sum.total.toFixed(2));
      const _sells = data.slice(0, -1).map((sell) => {
        const day = new Date(sell.updated_at).getDate();
        const value = Number((sell.total / 100).toFixed(2));
        console.log(day, value)
        return { day, value };
      });
      setSells(_sells);
    };

    fetch()
      .then()
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const today = (await ReportsFetch.getDailyEaring()).pop();
      const week = (await ReportsFetch.getWeekEaring()).pop();

      setSellsDetails({
        today: {
          value: today._sums.total.toFixed(2),
          count: today._nums.sells,
        },
        week: {
          value: week._sums.total.toFixed(2),
          count: week._nums.sells,
        }
      })
    }
    fetch().then().catch(err => console.log(err))
  }, []);

  // valor da porcentagem de ganho MENSAL (os outros valores estão no componente 'GainsCard')
  const percentageValue = -9;
  const percentageColor = percentageValue > 0 ? '#74A34C' : 'brown';

  // valor do dinheiro total MENSASL (os outros valores estão no componente 'GainsCard')
  const processedMoneyValue = (moneyValue) =>
    moneyValue.toString().replace(/\./g, ',');

  // quando o valor da porcentagem for positivo, esta variável adiciona o símbolo "+"
  const valueSymbol = percentageColor == '#74A34C' ? '+' : '';

  return (
    <div className={styles['gains-page-container']}>
      <Header user={user} />
      <Title text='Relatório de ganhos e vendas' />
      <div className={styles['gains-content']}>
        <div className={styles['gains']}>
          <h1 id={styles['container-title']}>Ganhos</h1>

          <GainsCard text='Hoje' value={sellsDetails.today.value} percentage={10} />

          <GainsCard text='Semanal' value={sellsDetails.week.value} percentage={-5} />
        </div>

        <div className={styles['monthly']}>
          <h1>Mensal</h1>
          <div className={styles['graphic']}>
            <Chart sells={sells} />
          </div>
          <h2 id={styles['total']}>Total</h2>
          <div className={styles['value']}>
            <h2>R$ {processedMoneyValue(total)}</h2>
            <span>
              <span style={{ color: percentageColor }}>
                {valueSymbol}
                {percentageValue}%
              </span>{' '}
              vs último mês
            </span>
          </div>
        </div>

        <div className={styles['sales']}>
          <h1 id={styles['container-title']}>Vendas</h1>
          <div className={styles['today']}>
            <h1>Hoje</h1>
            <h2>{sellsDetails.today.count}</h2>
          </div>
          <div className={styles['weekly']}>
            <h1>Semanal</h1>
            <h2>{sellsDetails.week.count}</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GainsPage;
