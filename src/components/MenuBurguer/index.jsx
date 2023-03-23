import "./style.css"

import { elastic as Menu } from 'react-burger-menu';

export const MenuBurguer = () => {
    return (
        <a href="#" class="menu-burger-container">
            <i class="menu-burger">
                <Menu>
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
export default MenuBurguer