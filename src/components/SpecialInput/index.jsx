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
        <div className='cpf-input-container'>
            <label className="cpf-label" htmlFor="input-default">{label}</label>
            <InputMask className='cpf-input' mask={mask} value={value} onChange={handleChange} />
        </div>
    )
}