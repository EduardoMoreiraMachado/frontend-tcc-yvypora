import './style.css'

export const GreenButton = ({text, onClick}) => {
    return (
        <button href='#' className="green_button" onClick={onClick}>{text}</button>
    )
}