import './style.css'

export const AddImage = ({text, subtext, imgUrl}) => {

    return(
        <div className="add-image-container">
            <h1 className="text">{text}</h1>
            <h2 className='subtext'>{subtext}</h2>
            {imgUrl ? 
                <>
                    <div className='image-preview' style={{backgroundImage: `url('${imgUrl}')`}}></div>
                    <button className='modify-image'>Alterar imagem</button>
                </>
                :    
                <>
                    <label for="file-selection" className="image-button"/>
                    <input id="file-selection" type="file"/>
                </>
            }
        </div>
    )
}

export default AddImage