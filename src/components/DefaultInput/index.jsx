import './style.css'

export const DefaultInput = ({name, type, onChange}) => {
    return(
        <div className='default-input-container'>
            <label className="default-label" htmlFor="input-default">{name}</label>
            <input onChange={onChange} className="default-input" type={type} id="input-default" name={name}/>
        </div>
    )
}
export default DefaultInput