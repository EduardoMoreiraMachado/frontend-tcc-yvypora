import styles from './style.module.css'
// import CartImg from '../../imgs/shopping_cart_icon.svg'

export const ButtonCart = () => {
    return (
        <>
            <div className="main-circle">
                <a className='inner-circle' href="/cart">
                    {/* <img src={CartImg} alt="" className="icon-cart" /> */}
                </a>
            </div>
        </>
    )
}

