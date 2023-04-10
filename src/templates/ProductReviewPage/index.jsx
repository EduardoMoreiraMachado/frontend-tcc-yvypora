import './style.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'

const ProductReviewPage = () => {
    return(
        <div className='product-review-page-container'>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className='product-review-content'>
                <Title 
                    text='Compra #30495'
                />
                <div className='review-containers'>
                    <h1>Avalie esta compra</h1>
                    <div className='entrega-review'>
                        <p>Relate aqui a experiência com essa entrega</p>
                        <textarea
                            cols="30"
                            rows="5"
                            maxLength="200"
                            placeholder='Exemplo: Entrega ultra veloz'
                            id="entrega"
                        />      
                    </div>
                    <div className='produtos-review'>
                        <p>Relate aqui a experiência com os produtos comprados</p>
                        <div id='review'>
                            <div className='produtos-vendedor'>
                                <div className='vendedor-photo' style={{backgroundImage: `url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg')`}}></div>
                                <span>Ze do Alfácil - 1x Alface Americana</span>
                            </div>
                            <textarea
                                cols="30"
                                rows="5"
                                maxLength="200"
                                placeholder='Exemplo: Produto de ótima qualidade'
                                id="produto"
                            />      
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductReviewPage
