import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'

import UserImage from '../UserImage'

export const Header = ({imgUrl}) => {
    return (
        <header id='default-header'>
            <div className='header-icon' id='default-header-icon'>
                <img className='text-icon' src={YvyporaTextIcon} alt=''/>
            </div>
            <UserImage 
                imgUrl={imgUrl}
            />
        </header>
    )
}
export default Header
