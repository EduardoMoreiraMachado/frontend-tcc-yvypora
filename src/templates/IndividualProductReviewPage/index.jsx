import styles from './style.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TitleSubtitle } from '../../components/TitleSubtitle'
import { BoughtItem } from '../../components/BoughtItem'
import { RatingStars } from '../../components/RatingStars'
import { GreenButton } from '../../components/GreenButton'

const IndividualProductReviewPage = () => {
    return(
        <div className={styles["individual-product-review-page-container"]}>
            {/* <Header 
                imgUrl={'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'}
            /> */}
            <div className={styles["individual-product-review-content"]}>
                <TitleSubtitle
                    text='Compra #30495'
                    subtitle='Nota dos produtos'
                />
                <div className={styles["individual-review-containers"]}>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                    <div className={styles["individual-item"]}>
                        <BoughtItem 
                            name='Abóbora'
                            imgUrl='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                            unit='800g'
                            price='R$ 24,00'
                            qnt={4}
                        />
                        <RatingStars />
                    </div>
                </div>
                <div className={styles["sent-review-button"]}>
                    <GreenButton 
                        text='Avaliar'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IndividualProductReviewPage
