import './style.css'

import YvyporaIcon from '../../imgs/yvypora_icon.svg'

export const SearchInputHeader = () => {
    return (
        <header>
            <img className='icon-yvy' src={YvyporaIcon} alt=''/>
            <input className='text-input' type='search'/>
            <div className='sign-container'>
                <a href='/signup' className='sign-up'>Criar conta</a>
                <a href = "/login" className='sign-in'>Login</a>
            </div>
        </header>
    )
}