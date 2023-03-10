import './style.css'

export const AddImage = ({text, subtext}) => {
    return(
        <div className="add-image-container">
            <h1 className="text">{text}</h1>
            <h2 className='subtext'>{subtext}</h2>
            <button className="image-button"/>
        </div>
    )
}

export default AddImage