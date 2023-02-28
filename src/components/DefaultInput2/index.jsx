import './style.css'

export const DefaultInput2 = ({name, type}) => {
    return(
        <form className="animated-form">
            <input className="animated-input" type={type} id="input-animated"/>
            <label className="animated-label" htmlFor="input-default">
                <span className="animated-span">{name}</span>
            </label>
        </form>
    )
}
