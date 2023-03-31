import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg"

export const EmptyHeader = () => {
    return(
        <header id="empty-header">
            <div className='header-icon'>
                <img className='icon-yvy' src={YvyporaTextIcon} alt=''/>
            </div>
        </header>
    )
}
