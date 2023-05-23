import styles from './styles.module.css'

import { Rating } from "react-simple-star-rating";

export const RatingStarsStatic = ({reviewValue}) => {

    const value = (Math.round(reviewValue * 2) / 2).toFixed(1);

    return(
        <div className={styles['rating-stars-static-container']}>
            <Rating
                emptyStyle={{ display: "flex" }} fillStyle={{ display: "-webkit-inline-box" }} 
                initialValue={value}
                size={50}
                SVGclassName="star-rate-icon"
                allowFraction={true}
                readonly={true}
            />
        </div>
    )
}
