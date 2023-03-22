import PrevPageIcon from '../../imgs/prev_page_icon.svg'

export const PrevPageHeader = () => {
    return(
        <header>
            <div className='prev-page-button'>
                <img className='prev-page-icon' src={PrevPageIcon} alt=''/>
            </div>
        </header>
    )
}