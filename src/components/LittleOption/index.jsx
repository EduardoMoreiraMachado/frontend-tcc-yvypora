import "./style.css"

export const LittleOption = ({imgUrl, text, link}) => {
    return (
        <div className='little-option-container'>
            <img className='option-image' src={imgUrl}/>
            <a href={link}className='option-text'>{text}</a>
        </div>
    )
}

export default LittleOption