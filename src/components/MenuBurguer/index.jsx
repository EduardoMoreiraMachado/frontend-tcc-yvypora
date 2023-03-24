import "./style.css"

import { slide as Menu } from 'react-burger-menu';
import { useEffect, useState } from "react";

var styles = {

    bmItem: {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content':'space-evenly',
      'width' : '100%',
      'height' : '100%',
    //   'background-color' : 'aqua',
      'text-decoration' : 'none',
      'list-style':'none'
    }  
  }


export const MenuBurguer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth)
      console.log(windowWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

    if(windowWidth < 769 ){
        return(
            <a href="#" class="menu-burger-container">
            <i class="menu-burger">
                <Menu itemListClassName={"my-class"} styles={ styles }>
                    <nav>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a>Lives</a>
                        </li>
                        <li>
                            <a href="/fair-near">Feiras próximas</a>
                        </li>
                        <li>
                            <a href="/profile">Perfil</a>
                        </li>
                    </nav>
                </Menu>
            </i>
        </a>
        )
    }
}
export default MenuBurguer