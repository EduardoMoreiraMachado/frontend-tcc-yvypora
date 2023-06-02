import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const ButtonCart = () => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem("user-details")))
    const [cart, _setCart] = useState(JSON.parse(sessionStorage.getItem("cart")))
    const [sizeOfCart, setSizeOfCart] = useState(null)

    const [route, setRoute] = useState("cart")

    useEffect(() => {
        if(user) {
            if(user.typeof === "COSTUMER") {
                setRoute("cart")
                if(cart) {
                    setSizeOfCart(cart.products.length)
                }
            } else {
                setRoute("marketer/products")
            }
        }
    }, [user, cart])
    
    return (
        <>
            <div className={styles["main-circle"]}>
                <a className={route == 'cart' ? styles[`inner-circle-cart`] : styles[`inner-circle-products`]} href={`/${route}`}></a>
                {sizeOfCart > 0 && (
                    <h1>{sizeOfCart}</h1>
                )}
            </div>
        </>
    )
}
