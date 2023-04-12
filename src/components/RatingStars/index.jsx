import './style.css'

import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'

export const RatingStars = () => {
    const [rating, setRating] = useState(0)

    // pegar o valor da avaliação
    const handleRating = (newRating) => {
        setRating(newRating)
    } 

    const handleReset = () => {
        // volta para o valor inicial
        setRating(0)
    }

    return(
        <div className='rating-stars-container'>
            <Rating
                initialValue={rating}
                style={{display: 'flex', flexDirection: 'column'}}
                size={80}
                onClick={handleRating} 
                allowFraction={true}
                showTooltip={true}
                tooltipDefaultText='Sua avaliação'
                tooltipArray={[
                    'Horrível',
                    'Muito ruim',
                    'Ruim',
                    'Não gostei',
                    'Médio',
                    'Ok',
                    'Podia ser melhor',
                    'Bom',
                    'Incrível',
                    'Perfeito'
                ]}
            />
            {rating > 0 &&
                <div className='reset-button-container'>
                    <button onClick={handleReset}>Cancelar</button>
                </div>
            }
        </div>
    )
}
