import './style.css'
import InputMask from 'react-input-mask';

// função que substitue todo caracter que não for de 0 a 9 por uma string vazia
const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

export const SpecialInput = ({label, value, onChange, name, mask}) => {
    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: onlyNumbers(event.target.value)
            }
        });
    }

    return(
        <div className='special-input-container'>
            <label className="special-label">{label}</label>
            <InputMask className='special-input' mask={mask} value={value} onChange={handleChange} name={name} />
        </div>
    )
}