import styles from './styles.module.css';

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg';
import YvyporaWhiteTextIcon from '../../imgs/yvypora_white_text_icon.svg'
import LoginBackgroundImage from '../../imgs/login_background_image.jpg'

import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getDetails } from '../../services/api/fetchs/common/user';
import { useState } from 'react';
import { login } from '../../services/api/fetchs/common/login';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

export const Login = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const inputs = document.querySelectorAll('input');

      const email = inputs[0].value;
      const password = inputs[1].value;

      const { token } = await login({ email, password });

      localStorage.setItem('user-logged-token', token);

      const details = await getDetails();
      localStorage.setItem('user-details', JSON.stringify(details));

      await MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Boas-vindas de volta {details.name}!</p>,
        icon: 'success',
        buttonsStyling: false,
        timerProgressBar: true,
      });

      setIsLoading(false);

      if (details.typeof === 'COSTUMER') {
        navigate('/#');
      }
      if (details.typeof === 'MARKETER') {
        navigate('/marketer');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      let message = error.response?.data.message;
      if (!message) message = 'Error!';
      await MySwal.fire({
        timer: 4500,
        showConfirmButton: false,
        title: <p>E-mail e/ou senha inválidos</p>,
        icon: 'error',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <>
      <a href='/'>
        <img className={styles['icon']} src={YvyporaTextIcon} alt='' />
      </a>
      <a href='/'>
        <img className={styles['icon-white']} src={YvyporaWhiteTextIcon} alt='' />
      </a>
      <div className={styles['login-container']}>
        {/* <header className='header-without-margins'>
        <div className='header-icon'>
          <img className='icon-yvy' src={YvyporaTextIcon} alt='' />
        </div>
      </header> */}

        <div className={styles['login-content']}>
          <div className={styles['input-container']}>
            <Title text='Login' />
            <div className={styles['input']}>
              <div className={styles['default-input-container']}>
                <label
                  className={styles['default-label']}
                  htmlFor='input-default'
                >
                  E-mail
                </label>
                <input
                  className={styles['default-input']}
                  type='text'
                  id='input-default'
                  name='e-mail'
                />
              </div>

              <div className={styles['default-input-container']}>
                <label
                  className={styles['default-label']}
                  htmlFor='input-default'
                >
                  Senha
                </label>
                <input
                  className={styles['default-input']}
                  type='password'
                  id='input-default'
                  name='senha'
                />
              </div>
            </div>
            <div className={styles['button-container']}>
              <GreenButton
                isLoading={isLoading}
                text='Entrar'
                onClick={handleClick}
                type='submit'
              />
            </div>
          </div>
        </div>

        <div className={styles['image']} style={{backgroundImage: `url(${LoginBackgroundImage})`}}></div>

        {/*  */}
      </div>
      <Footer useMargin={false} />
    </>
  );
};

export default Login;
