import './style.css'

import iconLogoff from "../../imgs/exportsquare.svg"
import { useState } from 'react'

export const ExitOption = () => {
    const [ click, setClick ] = useState(false)

    function handleClick() {
        setClick(true)
    }

    function handleCancelClick() {
        setClick(false)
    }

    return(
        <div className='exit-option-container'>
            <button onClick={handleClick} className='exit-content'>
                <img className='exit-option-image' src={iconLogoff}/>
                <a href='#' className='exit-option-text'>Sair</a>
            </button>
            {click && (
                <div className='exit-confirm-options'>
                    <h1>Tem certeza que deseja sair?</h1>
                    <div className='options-buttons'>
                        <button id='yes'>SIM</button>
                        <button onClick={handleCancelClick} id='no'>NÃO</button>
                    </div>
                </div>
            )}
        </div>
    )
}