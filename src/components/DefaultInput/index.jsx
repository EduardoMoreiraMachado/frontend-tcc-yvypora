import styles from './styles.module.css'

export const DefaultInput = ({name, type, onChange}) => {
    return(
        <div className={styles['default-input-container']}>
            <label className={styles["default-label"]} htmlFor="input-default">{name}</label>
            <input onChange={onChange} className={styles["default-input"]} type={type} id="input-default" name={name}/>
        </div>
    )
}
export default DefaultInput