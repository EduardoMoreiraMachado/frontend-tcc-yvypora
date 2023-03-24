import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'

export const SignHeader = () => {
    return (
        <header>
            <div className='header-icon'>
                <img className='text-icon' src={YvyporaTextIcon} alt=''/>
            </div>
            <div className='sign-container'>
                <span className='sign-up'>Criar conta</span>
                <span className='sign-in'>Login</span>
            </div>
        </header>
    )
}
