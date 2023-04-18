import './style.css'

export const SearchInput = ({ value, onChange, onFocus, onBlur }) => {
    return (
        <input className='text-input' type='search' value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
    )
}
