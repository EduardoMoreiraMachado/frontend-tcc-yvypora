import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const ButtonCart = () => {
    const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))

    const [route, setRoute] = useState("cart")

    useEffect(() => {
        if (user ){
            if (user.typeof === "COSTUMER") {
                setRoute("cart")
            }
            else {
                setRoute("marketer/products")
            }
        }
    }, [user])
    
    return (
        <>
            <div className={styles["main-circle"]}>
                <a className={route == 'cart' ? styles[`inner-circle-cart`] : styles[`inner-circle-products`]} href={`/${route}`}></a>
            </div>
        </>
    )
}

