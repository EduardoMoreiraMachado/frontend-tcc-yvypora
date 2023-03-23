
import { ButtonCart } from "../ButtonCart";
import './style.css'
import './menu-burguer.css'
import { slide as Menu } from 'react-burger-menu';
import HomeImg from '../../imgs/home.svg'
import MenuImg from '../../imgs/menu.svg'
import VideoImg from '../../imgs/video.svg'
import FairImg from '../../imgs/fair.svg'
import ProfileImg from '../../imgs/profile.svg'
export const NavBar = () => {



  // const menu = document.querySelector('.menu-burger-container')

  // function menuAction() {
  //     menu.classList.toggle('show')   
  // }

  // menu.addEventListener('click', menuAction)


  return (
    <div className="nav-bar-container">

      <a href="#" class="menu-burger-container">
        <i class="menu-burger">
          <Menu>
            <ul>
              <li> Home</li>
            </ul>
          </Menu>
        </i>
      </a>
      
        <div className={'upper-nav'}>
          <a className="bar-image menu-item" href="/">
            <img src={HomeImg} alt="" className="icon" />
          </a>
          <a className="bar-image menu-item" href="#">
            <img src={VideoImg} alt="" className="icon" />
          </a>
        </div>
        <div className="button-container">
          <ButtonCart />
        </div>

        <div className={'lower-nav'}>
          <a className="bar-image menu-item" href="/fair-near">
            <img src={FairImg} alt="" className="icon" />
          </a>
          <a className="bar-image menu-item" href="/profile">
            <img src={ProfileImg} alt="" className="icon" />
          </a>
        </div>
      </div>
  )
}
export default NavBar