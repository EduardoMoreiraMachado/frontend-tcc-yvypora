import './style.css'
import CartImg from '../../imgs/cart.png'

export const ButtonCart = () => {
    return (
        <>
            <div className="main-circle">
                <div className="inner-circle">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
                        <img src={CartImg} alt="" className="icon-cart" />
                    </a>
                </div>
            </div>
        </>
    )
}

