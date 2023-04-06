import './style.css'

export const Option = ({imgUrl, text, link}) => {
    return (
        <div className='option-container'>
            <img className='option-image' src={imgUrl}/>
            <a href={link}className='option-text'>{text}</a>
        </div>
    )
}

export default Option
