import YvyporaIcon from '../../imgs/yvypora_icon.svg'
import { SearchInput } from '../SearchInput'

export const InputHeader = () => {
    return (
        <header>
            <img className='icon' src={YvyporaIcon} alt=''/>
            <SearchInput />
            <div className='sign-container'>
                <span className='sign-up'>Criar conta</span>
                <span className='sign-in'>Login</span>
            </div>
        </header>
    )
}