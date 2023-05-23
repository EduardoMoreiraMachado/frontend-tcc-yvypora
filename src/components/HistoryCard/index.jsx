import styles from './styles.module.css'

import { BoughtItem } from '../BoughtItem'

import { useState, useEffect } from 'react'

export const HistoryCard = ({fairImg, tentName, fairName, purchaseDate, listOfProducts, sale}) => {
    const [ click, setClick ] = useState(false)
    const [productCards, setProductCards] = useState([])

    useEffect(() => {  
        const productCardData = listOfProducts.map(({
            id,
            productName, 
            productImg, 
            productUnit, 
            price,
            productQnt
        }) => {
            return (
                <BoughtItem 
                    key={id}
                    name={productName}
                    imgUrl={productImg}
                    unit={productUnit}
                    price={price}
                    qnt={productQnt}
                />  
            )
        })        
        console.log(productCardData);
        

        setProductCards(productCardData)
    }, [listOfProducts])

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
                        {productCards}
                    </div>
                }
            </div>
        </div>
    )
}
