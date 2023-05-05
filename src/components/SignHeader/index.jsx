import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg';

import { BurgerMenu } from '../BurgerMenu';

export const SignHeader = () => {
  return (
    <header id='sign-header'>
      <div id='burger-menu-container'>
        <BurgerMenu />
      </div>
      <div className='header-icon'>
        <img className='text-icon' src={YvyporaTextIcon} alt='' />
      </div>
      <div className='sign-container'>
        <span className='sign-up'>
          <a href='/signup' className='link-black-color'>
            Criar conta
          </a>
        </span>
        <span className='sign-in'>
          <a href='/login'>Login</a>
        </span>
      </div>
    </header>
  );
};
