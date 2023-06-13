import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Title } from '../../components/Title';
import { DefaultInput } from '../../components/DefaultInput';
import { SpecialInput } from '../../components/SpecialInput';
import { GreenButton } from '../../components/GreenButton';
import { AddImage } from '../../components/AddImage';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

import { getDetails } from '../../services/api/fetchs/common/user';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { updateMarketerAccount } from '../../services/api/fetchs/marketer/marketer';
import { appendPictureToUser } from '../../services/api/fetchs/common/picture';

const MySwal = withReactContent(Swal);

export const UpdateFeiranteAccount = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const cpfInput = useRef(null);
  const phoneInput = useRef(null);
  const birthdayInput = useRef(null);
  const tentNameInput = useRef(null);
  const imageInput = useRef(null);

  const [values, setValues] = useState({});

  useEffect(() => {
    console.log(user);

    nameInput.current.value = user.name;
    emailInput.current.value = user.email;

    if (user.cpf) cpfInput.current.value = user.cpf;

    if (user.phone) phoneInput.current.value = user.phone;
    if (user.tent_name) tentNameInput.current.value = user.tent_name;

    let birthday = user.birthday.split('-');
    birthday = `${birthday[2]}/${birthday[1]}/${birthday[0]}`;

    birthdayInput.current.value = birthday;
  }, [user]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const { id } = JSON.parse(localStorage.getItem('user-details'));

    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    // const cpf = cpfInput.current.value;
    const phone = phoneInput.current.value;
    const birthday = birthdayInput.current.value;
    const tent_name = tentNameInput.current.value;

    const image = imageInput.current.files[0];
    const formdata = new FormData();
    formdata.append('picture', image);

    let newBirthday = user.birthday.split('-');
    newBirthday = `${newBirthday[0]}/${newBirthday[1]}/${newBirthday[2]}`;
    newBirthday = newBirthday.replaceAll('/', '-');

    const marketer = {
      name,
      email,
      birthday: newBirthday,
      id,
      tent_name,
    };

    // if (cpf)
    //   marketer.cpf = cpf.replaceAll('.', '').replaceAll('-', '').toString();
    if (password) marketer.password = password;

    try {
      const { newToken: token } = await updateMarketerAccount(marketer);
      localStorage.setItem('user-logged-token', token);
    } catch (e) {
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Confirme as informações fornecidas</p>,
        icon: 'error',
        timerProgressBar: true,
      });
    }

    if (!image) {
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Perfil atualizado</p>,
        icon: 'success',
        buttonsStyling: false,
        timerProgressBar: true,
      });

      const updatedDetails = await getDetails();

      localStorage.setItem('user-details', JSON.stringify(updatedDetails));

      setUser(updatedDetails);

      return null;
    }

    try {
      await appendPictureToUser(formdata);

      const updatedDetails = await getDetails();

      localStorage.setItem('user-details', JSON.stringify(updatedDetails));

      setUser(updatedDetails);

      await MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Perfil atualizado</p>,
        icon: 'success',
        buttonsStyling: false,
        timerProgressBar: true,
      });

      window.location.reload(true);
    } catch (err) {
      console.log(err);
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Confirme as informações fornecidas</p>,
        icon: 'error',
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles['update-feirante-account-container']}>
      <Header user={user} />
      <Title text='Editar conta' />
      <div className={styles['update-content']}>
        <div className={styles['nav-bar']}>
          <NavBar />
        </div>
        <div className={styles['info-inputs']}>
          <div className={styles['update-inputs']}>
            <DefaultInput name='Nome' type='text' inputRef={nameInput} />
            <DefaultInput name='Email' type='email' inputRef={emailInput} />
            <DefaultInput
              name='Senha'
              type='password'
              inputRef={passwordInput}
            />
            {/* <SpecialInput
              inputRef={cpfInput}
              name='cpf'
              label='CPF'
              mask='999.999.999-99'
              value={values.cpf}
              onChange={handleChange}
            /> */}
            <SpecialInput
              inputRef={phoneInput}
              name='phone'
              label='Telefone'
              mask='(999) 9 9999-9999'
              value={values.phone}
              onChange={handleChange}
            />
            <DefaultInput
              inputRef={tentNameInput}
              name='Nome do estabelecimento'
              type='text'
            />
            <SpecialInput
              inputRef={birthdayInput}
              name='date'
              type='date'
              label='Data de nascimento'
              mask='99/99/9999'
              value={values.date}
              onChange={handleChange}
            />
          </div>
          <div className={styles['green-button']}>
            <AddImage inputRef={imageInput} currentImage={user.picture_uri}/>
            <GreenButton text='Salvar' onClick={handleClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateFeiranteAccount;
