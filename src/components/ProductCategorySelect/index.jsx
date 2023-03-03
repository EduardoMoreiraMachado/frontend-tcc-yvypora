import './style.css'

export const ProductCategorySelect = () => {

    return(
        <div className='product-category-select-container'>
            <button className='category-select' id="all">Todos</button>
            <button className='category-select' id="discount">Em desconto</button>
            <button className='category-select' id="close">Perto de você</button>
        </div>
    )
}