import styles from './styles.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg';

import { Title } from '../../components/Title';
import { DefaultInput } from '../../components/DefaultInput';
import { AddImage } from '../../components/AddImage';
import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';
import { SpecialInput } from '../../components/SpecialInput';

import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { fetchMarketerFormFields } from '../../services/api/fetchs/common/form-fields';
import { getLocation } from '../../utils/location';
import { singUpMarketer } from '../../services/api/fetchs/marketer/marketer';
import { appendPictureToUser } from '../../services/api/fetchs/common/picture';
import { commonsAPI } from '../../services/api/index';

const MySwal = withReactContent(Swal);

export const SignUpFeirante = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [values, setValues] = useState({});
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchMarketerFormFields(location);
      console.log(fields);

      setGenders(fields.genders);
    };
    fetch().then();
  }, []);

  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Senha: '',
    'Data de nascimento': '',
    'Nome do estabelecimento': '',
  });

  const inputCpf = useRef(null);
  const phoneInput = useRef(null);
  const imageInput = useRef(null);

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    localStorage.setItem('location', JSON.stringify(location));
  }, []);

  const handleClick = async (e) => {
    const marketer = {
      name: String,
      cnpj: String,
      cpf: String,
      email: String,
      password: String,
      phone: String,
      birthday: String,
      location: {
        longitude: Number,
        latitude: Number,
      },
      gender: String,
    };
    e.preventDefault();

    const gender = document.querySelector(
      'input[name="radio-20"]:checked'
    ).value;

    marketer.gender = gender.toUpperCase();
    marketer.name = formData.Nome;
    marketer.email = formData.Email;
    marketer.password = formData.Senha;
    marketer.cpf = inputCpf.current.value;
    marketer.phone = phoneInput.current.value.replace(/\D/g, '');
    marketer.tent_name = formData['Nome do estabelecimento'];
    // add regex here
    marketer.birthday = formData['Data de nascimento'];

    marketer.location.latitude = location.latitude;
    marketer.location.longitude = location.longitude;

    const image = imageInput.current.files[0];
    const formdata = new FormData();
    console.log(formData);

    formdata.append('picture', image);

    try {
      const res = await singUpMarketer(marketer);

      const { data } = await commonsAPI.post('/login/', {
        email: res.email,
        password: marketer.password,
      });

      localStorage.setItem('user-logged-token', data.token);

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
    }
  };

  return (
    <div className={styles['main-cadastro']}>
      <header>
        <div className='header-icon'>
          <img className='icon-yvy' src={YvyporaTextIcon} alt='' />
        </div>
      </header>
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
            inputRef={inputCpf}
          />
          <SpecialInput
            name='phone'
            label='Telefone'
            mask='(999) 9 9999-9999'
            value={values.phone}
            onChange={handleChange}
            inputRef={phoneInput}
          />
          <DefaultInput
            name='Nome do estabelecimento'
            type='text'
            onChange={handleChangeFields}
          />
          <DefaultInput
            name='Data de nascimento'
            type='date'
            onChange={handleChangeFields}
          />
          <div className='genders'>
            {genders.map(({ name, id }) => (
              <label className='label cursor-pointer'>
                <span className='label-text'>{name}</span>
                <input
                  value={name}
                  type='radio'
                  name='radio-20'
                  className='radio checked:bg-green-900'
                />
              </label>
            ))}
          </div>
        </div>
        <div className={'button-add-image-container'}>
          <AddImage text='Adicione uma foto de perfil' inputRef={imageInput} />
          <GreenButton text='Cadastrar' onClick={handleClick} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpFeirante;
