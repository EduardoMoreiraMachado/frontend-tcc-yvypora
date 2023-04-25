import styles from './styles.module.css'

export const NextButton = ({onClick}) => {
    return (
        <button className={styles["next-button-container"]} onClick={onClick}></button>
    )
}
