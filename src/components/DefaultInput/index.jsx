import './style.css'

export const DefaultInput = ({name, type}) => {
    return(
        <div className='default-input-container'>
            <label for="input-default">{name}</label>
            <input type={type} id="input-default"/>
        </div>
    )
}
