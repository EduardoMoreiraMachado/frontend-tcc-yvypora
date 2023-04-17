import './style.css'

export const SearchInput = ({ value, onChange }) => {
    return (
        <input className='text-input' type='search' value={value} onChange={onChange}/>
    )
}
