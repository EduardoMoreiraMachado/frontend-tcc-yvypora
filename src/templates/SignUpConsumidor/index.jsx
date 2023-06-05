import styles from './styles.module.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg';

import { Footer } from '../../components/Footer';
import { DefaultInput } from '../../components/DefaultInput';
import { GreenButton } from '../../components/GreenButton';
import { SpecialInput } from '../../components/SpecialInput';
import { Title } from '../../components/Title';
import { AddImage } from '../../components/AddImage';
import { useEffect, useState } from 'react';
import CostumerFetch from '../../services/api/fetchs/costumer/costumer';
import { cepAPI, commonsAPI } from '../../services/api/index';
import { fetchCostumerFormFields } from '../../services/api/fetchs/common/form-fields';
import { appendPictureToUser } from '../../services/api/fetchs/common/picture';
import { EmptyHeader } from '../../components/EmptyHeader';

const MySwal = withReactContent(Swal);

export const SignUpConsumidor = () => {
  const [values, setValues] = useState({});
  const [genders, setGenders] = useState([]);
  const [addressTypes, setAddressType] = useState([]);

  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Senha: '',
    'Data de nascimento': '',
    'Nome do estabelecimento': '',
    cpf: '',
    cep: '',
  });

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    handleChangeFields(event);
  };

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchCostumerFormFields();
      setGenders(fields.genders);
      setAddressType(fields.typesOfAddress);
    };

    fetch().catch((err) => console.log(err));
  }, []);

  const handleClick = async (e) => {
    console.log(formData);
    e.preventDefault();
    const costumer = {
      name: String,
      email: String,
      password: String,
      cpf: String,
      address: {
        cep: String,
        uf: String,
        city: String,
        neighborhood: String,
        logradouro: String,
        number: Number,
        complemento: String,
        addressTypeId: Number,
      },
      birthday: String,
      gender: String,
    };

    const { cep, cpf, Email, Nome, Senha } = formData;

    console.log(formData);
    const birthday = formData['Data de nascimento'];

    const gender = document.querySelector(
      'input[name="radio-20"]:checked'
    ).value;
    const typeOfAddress = document.querySelector(
      'input[name="typeAddress"]:checked'
    ).value;

    console.log(birthday);

    costumer.name = Nome;
    costumer.email = Email;
    costumer.password = Senha;
    costumer.cpf = cpf;
    costumer.cep = cep;
    costumer.gender = gender[0].toUpperCase(); // add to input
    costumer.birthday = birthday;

    const { data } = await cepAPI.get(`${cep}/json/`);

    costumer.address.cep = cep;
    costumer.address.city = data.localidade;
    costumer.address.uf = data.uf;
    costumer.address.logradouro = data.logradouro;
    costumer.address.number = 146; // add to input
    costumer.address.neighborhood = data.bairro;
    costumer.address.complemento = ''; // add to input
    costumer.address.addressTypeId = typeOfAddress; // add to input

    try {
      const res = await CostumerFetch.create(costumer);

      const { data } = await commonsAPI.post('/login/', {
        email: res.email,
        password: costumer.password,
      });

      localStorage.setItem('user-logged-token', data.token);

      // append image
      const image = document.getElementById('file-selection').files[0];
      const formdata = new FormData();

      formdata.append('picture', image);

      await appendPictureToUser(formdata);

      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Boas-vindas!</p>,
        icon: 'success',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    } catch (e) {
      console.log(e);

      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Erro ao cadastrar</p>,
        icon: 'error',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles['main-cadastro']}>
      {/* <header>
        <div className='header-icon'>
          <img className='icon-yvy' src={YvyporaTextIcon} alt='' />
        </div>
      </header> */}
      <EmptyHeader />
      <Title text='Cadastre-se' />
      <div className={styles['input-container']}>
        <div className={styles['inputs']}>
            <DefaultInput name='Nome' type='text' onChange={handleChangeFields} />
            <DefaultInput
              name='Email'
              type='email'
              onChange={handleChangeFields}
            />
            <DefaultInput
              name='Senha'
              type='password'
              onChange={handleChangeFields}
            />
            <SpecialInput
              name='cpf'
              label='CPF'
              mask='999.999.999-99'
              value={values.cpf}
              onChange={handleChange}
            />
            <SpecialInput
              name='cep'
              label='CEP'
              mask='99999-999'
              value={values.cep}
              onChange={handleChange}
            />
            <DefaultInput
              name='Data de nascimento'
              type='date'
              onChange={handleChangeFields}
            />
          <div className={styles['genders']}>
            {genders.map(({ name, id }) => (
              <label className={styles['cursor-pointer']}>
                <span className={styles['label-text']}>{name}</span>
                <input
                  value={name}
                  type='radio'
                  name='radio-20'
                  className='radio checked:bg-green-900'
                />
              </label>
            ))}
          </div>
          <div className={styles['type-of-address']}>
            {addressTypes.map(({ name, id }) => (
              <label className={styles['cursor-pointer']}>
                <span className={styles['label-text']}>{name}</span>
                <input
                  value={id}
                  type='radio'
                  name='typeAddress'
                  className='radio checked:bg-green-900'
                />
              </label>
            ))}
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

export default SignUpConsumidor;
