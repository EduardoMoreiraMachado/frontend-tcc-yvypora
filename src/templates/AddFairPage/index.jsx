import { SpecialInput } from '../../components/SpecialInput';
import { TitleSubtitle } from '../../components/TitleSubtitle';
import { useState, useEffect } from 'react';
import { DefaultInput } from '../../components/DefaultInput';
import { AddImage } from '../../components/AddImage';
import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';
import { fetchFairFormFields } from '../../services/api/fetchs/common/form-fields';
import MarketerFairFetch from '../../services/api/fetchs/marketer/fair';

import styles from './styles.module.css';
import { consumeCep } from '../../services/api/fetchs/common/cep';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Header } from '../../components/Header';
import { useRef } from 'react';

const MySwal = withReactContent(Swal);

export const AddFairPage = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );
  const cepInput = useRef(null);
  const nameTitle = useRef(null);
  const [values, setValues] = useState({});
  const [daysOfWeekFields, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchFairFormFields({
        latitude: 20,
        longitude: -20,
      });
      console.log(fields);
      setDaysOfWeek(fields[0].daysOfWeeks);
    };
    fetch().then().catch();
    console.log(daysOfWeekFields);
  }, []);

  async function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const address = await consumeCep(cepInput.current.value.replaceAll('-', ''));
    if (!address) {
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>CEP inválido</p>,
        icon: 'error',
        buttonsStyling: false,
        timerProgressBar: true,
      });
      document.querySelector('input[name="cep"]').value = '';
    } else {
      const name = nameTitle.current;
      name.textContent = `Feira do ${address.bairro} - ${address.logradouro}`;
    }

    const daysSelected = [];
    const dayOfWeekOption = 0;

    document.querySelectorAll('#day > input').forEach((day) => {
      if (day.checked) daysSelected.push(day);
    });

    console.log(daysSelected);

    const name = `Feira do ${address.bairro} - ${address.logradouro}`;
    const cep = cepInput.current.value;
    const abertura = document.querySelector(
      'input[name="Horário de abertura"]'
    ).value;
    const fechamento = document.querySelector(
      'input[name="Horário de encerramento"]'
    ).value;

    const dayOfWeekSelector = document.querySelector('#day-of-week');

    console.log(address);
    const data = {
      name,
      address: {
        cep,
        number: 0,
        complemento: '',
        addressTypeId: 3,
        city: address.localidade,
        logradouro: address.logradouro,
        uf: address.uf,
        neighborhood: address.bairro,
      },
      dateAndHourOfWork: daysSelected.map((day) => {
        return {
          open: `${abertura}:00`,
          close: `${fechamento}:00`,
          dayOfWeek: { id: day.value, name: day.id },
        };
      }),
    };

    console.log(data);

    try {
      const { payload } = await MarketerFairFetch.create(data);
      console.log(payload);
      const { id } = payload;

      const file = document.querySelector('#file-selection').files[0];
      const formdata = new FormData();

      formdata.append('picture', file);

      try {
        await MarketerFairFetch.addImage(id, formdata);
      } catch (e) {
        console.log(e);
      }

      await MarketerFairFetch.associate(id);

      MySwal.fire({
        timer: 3000,
        showConfirmButton: false,
        title: <p>Nova feira</p>,
        html: <p>Feira cadastrada com sucesso</p>,
        icon: 'success',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    } catch (e) {
      console.log(e);
      let message = e.response?.data.message;

      MySwal.fire({
        timer: 3000,
        showConfirmButton: false,
        title: <p>Falha ao cadastrar feira</p>,
        html: <p>{message}</p>,
        icon: 'error',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles['add-fair-page-container']}>
      <Header user={user} />
      <TitleSubtitle
        text={'Escolha o local'}
        subtitle='Insira as feiras onde seus produtos serão vendidos'
      />
      <div className={styles['input-container']}>
        <div className={'inputs'}>
          <h1>Detalhes da feira</h1>
          <h2 id={styles['fair-name']} ref={nameTitle}>
            Nome da Feira:{' '}
          </h2>
          <SpecialInput
            name='cep'
            inputRef={cepInput}
            label='CEP do local da feira'
            mask='99999-999'
            value={values.cep}
            onChange={handleChange}
          />

          <DefaultInput name='Horário de abertura' type='time' />
          <DefaultInput name='Horário de encerramento' type='time' />

          <div className={styles['days-week-container']}>
            <span className={styles['days-week-title']}>Dias de funcionamento</span>
            <div className={styles['days-week']}>
              {daysOfWeekFields.map(({ id, name, abbr }) => {
                return (
                  <div className={styles['day']} id='day'>
                    <input type='checkbox' id={name} name='scales' value={id} />
                    <label for={name}>{abbr}</label>
                  </div>
                );
              })}
              {/* <div className={styles["day">
                <input type="checkbox" id="mon" name="scales"/>
                <label for="mon">Segunda-feira</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="tue" name="scales"/>
                <label for="tue">Terça-feira</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="wed" name="scales"/>
                <label for="wed">Quarta-feira</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="thu" name="scales"/>
                <label for="thu">Quinta-feira</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="fri" name="scales"/>
                <label for="fri">Sexta-feira</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="sat" name="scales"/>
                <label for="sat">Sábado</label>
              </div>
              <div className={styles["day">
                <input type="checkbox" id="sun" name="scales"/>
                <label for="sun">Domingo</label>
              </div> */}
            </div>
          </div>
        </div>
        <div className={'button-add-image-container'}>
          <AddImage text='Adicione uma foto de perfil' />
          <GreenButton text='Cadastrar' onClick={handleClick} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddFairPage;
