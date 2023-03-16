import './style.css'
import YvyporaIcon from '../../imgs/yvypora_icon.svg'

export const EmptyHeader = () => {
    return (
        <header>
            <img className='icon-yvy' src={YvyporaIcon} alt=''/>
        </header>
    )
}