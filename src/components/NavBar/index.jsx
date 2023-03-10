
import { ButtonCart } from "../ButtonCart";
import './style.css'
import HomeImg from '../../imgs/home.svg'
import VideoImg from '../../imgs/video.svg'
import FairImg from '../../imgs/fair.svg'
import ProfileImg from '../../imgs/profile.svg'

export const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="upper-nav">
        <a className="bar-image" href="#">
          <img src={HomeImg} alt="" className="icon" />
        </a>
        <a className="bar-image" href="#">
          <img src={VideoImg} alt="" className="icon" />
        </a>
      </div>
      <div className="button-container">
        <ButtonCart />
      </div>

      <div className="lower-nav">
        <a className="bar-image" href="#">
          <img src={FairImg} alt="" className="icon" />
        </a>
        <a className="bar-image" href="#">
          <img src={ProfileImg} alt="" className="icon" />
        </a>
      </div>
    </div>
  )
}
