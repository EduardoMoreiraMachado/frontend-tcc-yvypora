import './style.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'

const IndividualProductReviewPage = () => {
    return(
        <div className='individual-product-review-page-container'>
            <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            />
            <div className='individual-product-review-content'>
                <Title 
                    text='Compra #30495'
                />
                <div className='individual-review-containers'>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IndividualProductReviewPage
