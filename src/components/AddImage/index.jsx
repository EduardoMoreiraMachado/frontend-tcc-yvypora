import './style.css'

export const AddImage = ({text, subtext}) => {
    return(
        <div className="add-image-container">
            <h1 className="text">{text}</h1>
            <h2 className='subtext'>{subtext}</h2>
            <label for="file-selection" className="image-button"/>
            <input id="file-selection" type="file"/>
        </div>
    )
}

export default AddImage