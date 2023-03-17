import './style.css'

export const Option = ({imgUrl, text}) => {
    return (
        <div className='option-container'>
            <img className='option-image' src={imgUrl}/>
            <h1 className='option-text'>{text}</h1>
        </div>
    )
}

export default Option