import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { RatingStars } from '../../components/RatingStars'
import { GreenButton } from '../../components/GreenButton'

const ProductReviewPage = () => {
    return(
        <div className={styles['product-review-page-container']}>
            {/* <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            /> */}
            <Title 
                text='Compra #30495'
            />
            <div className={styles['product-review-content']}>
                <div className={styles['review-containers']}>
                    <h1>Avalie esta compra</h1>
                    <div className={styles['entrega-review']}>
                        <p>Relate aqui sua experiência com essa entrega</p>
                        <textarea
                            cols="30"
                            rows="10"
                            maxLength="500"
                            placeholder='Exemplo: Entrega ultra veloz'
                            id={styles["entrega"]}
                        />      
                    </div>
                    <div className={styles['produtos-review']}>
                        <p>Relate aqui sua experiência com os produtos comprados</p>
                        <div id='review'>
                            <div className={styles['produtos-vendedor']}>
                                <div className={styles['vendedor-photo']} style={{backgroundImage: `url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg')`}}></div>
                                <span>Zé do Alfácil - 1x Alface Americana</span>
                            </div>
                            <textarea
                                cols="30"
                                rows="10"
                                maxLength="500"
                                placeholder='Exemplo: Produto de ótima qualidade'
                                id={styles["produto"]}
                            />      
                        </div>
                    </div>
                </div>
                <div className={styles['stars-container']}>
                    <div className={styles['entrega-stars']}>
                        <h1>Nota do entregador</h1>
                        <RatingStars />
                    </div>
                    <div className={styles['produtos-stars']}>
                        <h1>Nota dos produtos</h1>
                        <RatingStars />
                        <p>Caso queira avaliar cada item de sua compra individialmente <a href='https://www.figma.com/file/fB4sbEBD7WK4YvojWURH27/yvypora?node-id=138-908&t=EFDptxKA7JqO3ogY-0'>clique aqui</a></p>
                    </div>
                    <GreenButton 
                        text='Enviar'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductReviewPage
