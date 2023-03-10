import './style.css'

import { useState } from 'react'

export const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] = useState('');

    // verificar se o checkbox está ativado
    const handleCheckboxChannge = (event) => {
        setIsChecked(event.target.checked);
    }
    
    const handleKeyDown = (event) => {
        if(event.key === '-' || event.key === '+') {
            event.preventDefault();
        }
    }

    const handleChange = (event) => {
        const newValue = event.target.value.replace('-', '');
        setValue(newValue);
    }

    return(
        <div className='toggle-switch-container'>
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChannge}/>
                <span className="slider round"></span>
            </label>
            <input className={isChecked ? 'input-active' : 'input-not-active'} type="number" value={value} min='1' max='100' onKeyDown={handleKeyDown} onChange={handleChange} placeholder='% de desconto'/>
        </div>
    )
}