import YvyporaIcon from '../../imgs/yvypora_icon.svg'
import { SearchInput } from '../SearchInput'

export const SearchInputHeader = () => {
    return (
        <header>
            <img className='icon-yvy' src={YvyporaIcon} alt=''/>
            <SearchInput />
            <div className='sign-container'>
                <a href='/signup' className='sign-up'>Criar conta</a>
                <a href = "/login" className='sign-in'>Login</a>
            </div>
        </header>
    )
}