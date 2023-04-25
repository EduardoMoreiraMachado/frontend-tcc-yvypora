import styles from './styles.module.css'

export const LittleOption = ({imgUrl, text, link}) => {
    return (
        <div className={styles['little-option-container']}>
            <img className={styles['option-image']} src={imgUrl}/>
            <a href={link}className={styles['option-text']}>{text}</a>
        </div>
    )
}

export default LittleOption