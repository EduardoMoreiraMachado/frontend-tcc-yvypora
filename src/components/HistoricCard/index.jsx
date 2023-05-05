import styles from './styles.module.css'

import { BoughtItem } from '../BoughtItem'

import { useState } from 'react'

export const HistoricCard = ({fairImg, tentName, fairName, purchaseDate, productName, productImg, productUnit, productPrice, productQnt, productCount}) => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const counter = productCount

    const price = 'R$ ' + productPrice
    const productCard = [];
    for(let i = 0; i < counter; i++) {
        productCard.push(
            <BoughtItem 
                key={i}
                name={productName}
                imgUrl={productImg}
                unit={productUnit}
                price={price}
                qnt={productQnt}
            />
        )
    }

    return(
        <div className={styles['historic-card-container']}>
            <div className={styles['purchase']}>
                <div className={styles['main-purchase-info']} onClick={handleClick}>
                    <div className={styles['purchase-image']} style={{backgroundImage: `url(${fairImg})`}}></div>
                    <div className={styles['purchase-info']}>
                        <h1>{tentName}</h1>
                        <h2>{fairName}</h2>
                        <span>Data: {purchaseDate}</span>
                    </div>
                </div>
                {click &&
                    <div className={styles['purchase-products']}>
                        {productCard}
                    </div>
                }
            </div>
        </div>
    )
}
