import './style.css'

export const ShoppingItem = ({name, imgUrl, weight, price}) => {
    return(
        <div className='shopping-item-container'>
            <div className='item-visual'>
                <h1 className='name'>{name}</h1>
                <div className='item-image'>
                    <img className='image' src={imgUrl} alt=''/>
                </div>
            </div>
            <div className='item-numbers'>
                <div className='numbers'>
                    <h1 className='weight'>{weight}</h1>
                    <span className='price'>R$ {price}</span>
                </div>
                <button className='cart-icon'/>
            </div>
        </div>
    )
}