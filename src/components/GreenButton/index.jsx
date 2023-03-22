import './style.css'

export const GreenButton = ({text, onClick, type}) => {
    return (
        <button type={type} href='#' className="green_button" onClick={onClick}>{text}</button>
    )
}

export default GreenButton