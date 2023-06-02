import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const AddImage = ({ text, subtext, inputRef, currentImage}) => {
  const [image, setImage] = useState(currentImage ? currentImage : null);
  {
    console.log(`url('${image}')`)
  }
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className={styles['add-image-container']}>
      <h1 className={styles['text']}>{text}</h1>
      <h2 className={styles['subtext']}>{subtext}</h2>
      {image ? (
        <>
          <div
            className={styles['image-preview']}
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
          <label for='file-selection' className={styles['modify-image']}>
            Alterar imagem
          </label>
        </>
      ) : (
        <>
          <label for='file-selection' className={styles['image-button']} />
        </>
      )}
      <input
        id='file-selection'
        type='file'
        name='image'
        onChange={handleImageChange}
        ref={inputRef}
      />
    </div>
  );
};

export default AddImage;
