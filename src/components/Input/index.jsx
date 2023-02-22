import './style.css'

export const Input = ({searchValue, handleChange}) => {
    return (
        <input 
            className="text-input"
            // quando algo é digitado
            onChange={handleChange} 
            value={searchValue} 
            type="search" 
            placeholder="Type your search"
        />
    )
}