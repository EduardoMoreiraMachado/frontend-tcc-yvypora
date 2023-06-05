import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg';

import { BurgerMenu } from '../BurgerMenu';

export const SignHeader = () => {
  return (
    <header id='sign-header'>
      <div id='burger-menu-container'>
        <BurgerMenu />
      </div>
      <a className='header-icon' href='/'>
        <img className='text-icon' src={YvyporaTextIcon} alt='' />
      </a>
      <div className='sign-container'>
        <span className='sign-up'>
          <a href='/signup' className='link-black-color'>
            Criar conta
          </a>
        </span>
        <a className='sign-in' href='/login'>
          <span>Login</span>
        </a>
      </div>
    </header>
  );
};
