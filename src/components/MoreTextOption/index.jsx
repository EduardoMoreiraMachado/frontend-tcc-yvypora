import './style.css'

import ArrowIcon from '../../imgs/arrow_icon.svg'
import ArrowIconDown from '../../imgs/arrow_icon_down.svg'

import { useState } from 'react'

export const MoreTextOption = ({title, text}) => {
    const [ click, setClick ] = useState(false)

    function handleClick() {
        setClick(prevClick => !prevClick);
    }

    return(
        <div className='more-text-option-container'>
            <button onClick={handleClick} className='more-text-content' style={click ? {backgroundImage: `url(${ArrowIconDown})`} : {backgroundImage: `url(${ArrowIcon})`}}>
                <span className='more-text-title' style={click ? {maxWidth: '100ch', textOverflow: 'unset', textAlign: 'start'} : {maxWidth: '22ch', whiteSpace: 'nowrap'}}>{title}</span>
            </button>
            {click && (
                <div className='more-text-text'>
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}
