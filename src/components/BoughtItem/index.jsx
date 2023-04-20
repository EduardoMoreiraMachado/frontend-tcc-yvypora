import styles from './style.module.css'

export const BoughtItem = ({name, imgUrl, unit, price, qnt}) => {
    return(
        <div className='bought-item-container'>
            <div className='bought-item-visual'>
                <h1>{name}</h1>
                <div className='image' style={{backgroundImage: `url(${imgUrl})`}}></div>
            </div>
            <div className='bought-item-numbers'>
                <span>{unit}</span>
                <h1>{price}</h1>
                <h2>Quant.: {qnt}</h2>
            </div>
        </div>
    )
}
