import { useState } from 'react'
import './style.css'


export const AddImage = ({text, subtext}) => {
    const [image, setImage] = useState(null)

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0]
        
        if(selectedImage) {
            const reader = new FileReader()
            reader.onload = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(selectedImage)
        }
    }

    return(
        <div className="add-image-container">
            <h1 className="text">{text}</h1>
            <h2 className='subtext'>{subtext}</h2>
            {image ? 
                <>
                    <div className='image-preview' style={{backgroundImage: `url('${image}')`}}></div>
                    <label for="file-selection" className="modify-image">Alterar imagem</label>
                </>
                :    
                <>
                    <label for="file-selection" className="image-button"/>
                </>
            }
            <input id="file-selection" type="file" name='image' onChange={handleImageChange}/>                
        </div>
    )
}

export default AddImage