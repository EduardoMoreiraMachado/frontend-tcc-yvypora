import styles from './style.module.css'

import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'

export const RatingStars = () => {
    const [rating, setRating] = useState(0)

    // pegar o valor da avaliação
    const handleRating = (newRating) => {
        setRating(newRating)
        // SOMAR 0.5 AO PEGAR O VALOR DO ESTADO PARA O BACK-END
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
                SVGclassName='star-rate-icon'
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
                    'Podia ser melhor',
                    'Bom',
                    'Ótimo',
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
