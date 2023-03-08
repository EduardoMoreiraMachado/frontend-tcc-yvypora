import './style.css'

import StarIcon from '../../imgs/star_icon.png'

export const ProductsFilters = () => {
    return(
        <div className="products-filters-container">
            <div className="up-container">
                <div className='category-filter'>
                    <h1 className='category-filter-title'>Categoria</h1>
                    <button className='category-filter-button'>
                        <h2>Tudo</h2>
                    </button>
                    <button className='category-filter-button'>
                        <h2>Frutas</h2>
                    </button>
                    <button className='category-filter-button'>
                        <h2>Verduras</h2>
                    </button>
                    <button className='category-filter-button'>
                        <h2>Especiarias</h2>
                    </button>
                    <button className='category-filter-button'>
                        <h2>Outros</h2>
                    </button>
                </div>
                <div className='rating-filter'>
                    <h1 className='rating-filter-title'>Avaliação</h1>
                    <button className='rating-filter-button'>
                        <img src={StarIcon} alt=''/>
                        <h2>2 ou mais</h2>
                    </button>
                    <button className='rating-filter-button'>
                        <img src={StarIcon} alt=''/>
                        <h2>3 ou mais</h2> 
                    </button>
                    <button className='rating-filter-button'>
                        <img src={StarIcon} alt=''/>
                        <h2>4 ou mais</h2>
                    </button>
                    <button className='rating-filter-button'>
                        <img src={StarIcon} alt=''/>
                        <h2>5 apenas</h2>
                    </button>
                </div>
            </div>
            <div className="down-container">
                <h1 className='price-filter-title'>Preço</h1>
            </div>
        </div>
    )
}