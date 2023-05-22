import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const ButtonCart = () => {
    const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))

    const [type, setType] = useState("")

    useEffect(() => {
        if (user ){
            if (user.typeof === "COSTUMER") {
                setType("cart")
            }
            else {
                setType("products")
            }
        }
    }, [user])
    
    return (
        <>
            <div className={styles["main-circle"]}>
                <div className={styles[`inner-circle-${type}`]} href="/cart"></div>
            </div>
        </>
    )
}

