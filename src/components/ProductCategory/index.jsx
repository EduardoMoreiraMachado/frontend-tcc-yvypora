import './style.css'

import FruitsCategoryIcon from '../../imgs/fruits_category_icon.png'
import VegetablesCategoryIcon from '../../imgs/vegetables_category_icon.png'
import SpicesCategoryIcon from '../../imgs/spices_category_icon.png'
import OthersCategoryIcon from '../../imgs/others_category_icon.png'


export const ProductCategory = () => {
    return(
        <div className="product-category-container">
            <div className="category-item">
                <div className="category-image">
                    <img className="image" src={FruitsCategoryIcon} alt=""/>
                </div>
                <h1 className="category-name">Frutas</h1>
            </div>
            <div className="category-item">
                <div className="category-image">
                    <img className="image" src={VegetablesCategoryIcon} alt=""/>
                </div>
                <h1 className="category-name">Vegetais</h1>
            </div>
            <div className="category-item">
                <div className="category-image">
                    <img className="image" src={SpicesCategoryIcon} alt=""/>
                </div>
                <h1 className="category-name">Especiarias</h1>
            </div>
            <div className="category-item">
                <div className="category-image">
                    <img className="image" src={OthersCategoryIcon} alt=""/>
                </div>
                <h1 className="category-name">Outros</h1>
            </div>
        </div>
    )
}