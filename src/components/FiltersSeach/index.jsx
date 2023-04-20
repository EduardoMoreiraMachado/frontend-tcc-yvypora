import { WhiteButton } from "../WhiteButton"
// import IconStar from '../../imgs/icon_star.svg'
import styles from './style.module.css'
import { useState } from "react"



export const FiltersSearch = () =>{

    const [price,setPrice] = useState(0)

    const handleChange = (event) =>{
        setPrice(event.target.value)
    }

    return(
        <div className={styles["main-content-container-filters"]}>
           <div className={styles["filters-container"]}>
            <div className={styles["category-container"]}>
                <p>Categorias</p>
                <WhiteButton text='Tudo'/>
                <WhiteButton text='Fruta'/>
                <WhiteButton text='Verdura'/>
                <WhiteButton text='Especiarias'/>
                <WhiteButton text='Outros'/>

            </div>
            <div className={styles["avaliation-container"]}>
                <p>Avaliação</p>
            
                <WhiteButton text='2 ou mais'/>
                <WhiteButton text='3 ou mais'/>
                <WhiteButton text='4 ou mais'/>
                <WhiteButton text='5 apenas'/>
            </div>
            </div>
            <div className={styles["price-container"]}>
                <p className={styles["price-title"]}>Preço</p>
                <div className={styles["buttons-price"]}>
                    <WhiteButton text='0'/>
                    <WhiteButton text={price}/>
                </div>
                <input type="range" onClick={handleChange} className={styles["range-price"]}/>
            </div>
        </div>
    )

}
export default FiltersSearch