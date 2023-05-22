import styles from './styles.module.css'

import { BoughtItem } from '../BoughtItem'

import { useState } from 'react'

export const HistoryCard = ({fairImg, tentName, fairName, purchaseDate, productName, productImg, productUnit, productPrice, productQnt, productCount, sale}) => {
    const [ click, setClick ] = useState(false)

    let sizeStyle = {}

    if(sale) {
        sizeStyle = {
            height: '120px',
            width: '120px',
        }
    } else {
        sizeStyle = {
            height: '120px',
            width: '170px',
        }
    }

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
        <div className={styles['history-card-container']}>
            <div className={styles['purchase']}>
                <div className={styles['main-purchase-info']} onClick={handleClick}>
                    <div className={styles['purchase-image']} style={{backgroundImage: `url(${fairImg})`, ...sizeStyle}}></div>
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
