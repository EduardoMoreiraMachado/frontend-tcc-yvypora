import styles from './styles.module.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Title } from '../../components/Title';
import { DefaultInput } from '../../components/DefaultInput';
import { SpecialInput } from '../../components/SpecialInput';
import { GreenButton } from '../../components/GreenButton';
import { appendPictureToUser } from '../../utils/fetchs/common/picture';
import { useRef, useState } from 'react';
import AddImage from '../../components/AddImage';
import CostumerFetch from '../../utils/fetchs/costumer/costumer';
import { getDetails } from '../../utils/fetchs/common/user';
import { notify } from '../../utils/notify';

const MySwal = withReactContent(Swal);

export const UpdateConsumidorAccount = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );

  const inputCpf = useRef(null);
  const inputImage = useRef(null);

  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Senha: '',
    'Data de nascimento': '',
  });

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [values, setValues] = useState({});
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (event) => {
    event.preventDefault();

    const cpf = inputCpf.current.value.replaceAll('.', '').replaceAll('-', '');

    const data = {};

    data.id = user.id;

    if (cpf) data.cpf = formData.cpf;
    if (formData.Nome) data.name = formData.Nome;
    if (formData['Data de nascimento'])
      data.birthday = formData['Data de nascimento'];
    if (formData.Email) data.email = formData.Email;
    if (formData.Senha) data.password = formData.Senha;

    const image = inputImage.current.files[0];
    const formdata = new FormData();
    formdata.append('picture', image);

    try {
      const { newToken: token } = await CostumerFetch.update(data);
      localStorage.setItem('user-logged-token', token);
    } catch (err) {
      console.log(err);
    }

    if (image) {
      await appendPictureToUser(formdata);
    }

    const updatedDetails = await getDetails();

    localStorage.setItem('user-details', JSON.stringify(updatedDetails));

    setUser(updatedDetails);

    await notify('success', 'Conta atualizada com sucesso!');

    window.location.reload(true);

    // TODO add request to update
  };

  return (
    <div className={styles['update-consumidor-account-container']}>
      <Header user={{ picture_uri: '' }} />
      <Title text='Editar conta' />
      <div className={styles['update-content']}>
        <div className={styles['nav-bar']}>
          <NavBar />
        </div>
        <div className={styles['info-inputs']}>
          <form className={styles['update-inputs']}>
            <DefaultInput
              name='Nome'
              type='text'
              onChange={handleChangeFields}
            />
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
            <DefaultInput
              name='Data de nascimento'
              type='date'
              onChange={handleChangeFields}
            />
          </form>
          <div className={styles['green-button']}>
            <AddImage inputRef={inputImage} />
            <GreenButton onClick={handleClick} text='Salvar' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateConsumidorAccount;
