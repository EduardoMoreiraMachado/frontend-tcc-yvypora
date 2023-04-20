import styles from './style.module.css'

import { useState } from 'react';

export const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);
    // const [value, setValue] = useState('');
    const [value, setValue] = useState(1);

    // verificar se o checkbox está ativado
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }
    
    const handleChange = (event) => {
        let inputValue = event.target.value;

        // limita a quantidade de números
        if(inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2);
        }

        setValue(inputValue)
    }
    
    const handleKeyDown = (event) => {
        if(event.key === '-' || event.key === '+' || event.key === 'e') {
            event.preventDefault();
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === '0' && value === '') {
          event.preventDefault();
        }
    }

    return(
        <div className='toggle-switch-container'>
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                <span className="slider round"></span>
            </label>
            <div className={isChecked ? 'percentage-input-container' : 'percentage-input-none'}>
                <input 
                    className='input-active' 
                    type="number" 
                    value={value} 
                    min='1' 
                    max='99' 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    onKeyPress={handleKeyPress}
                />
                <span className='percentage-symbol'></span>
            </div>
        </div>
    )
}
