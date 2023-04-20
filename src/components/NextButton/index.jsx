import styles from './style.module.css'

export const NextButton = ({onClick}) => {
    return (
        <button className={styles["next-button-container"]} onClick={onClick}></button>
    )
}
