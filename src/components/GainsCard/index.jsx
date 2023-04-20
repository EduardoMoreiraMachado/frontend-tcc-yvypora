import { Chart } from 'react-charts'
import styles from './style.module.css'

export const GainsCard = ({title,data}) =>{

return(
   <div class Name="card-gain-container">
        <div className={title!=='Mensal' ? 'card-gain' : ""}>
            <p className='title-gain-card'>{title}</p>
            <p className='data-gain-card'>{data}</p>
            
            {/* {percent > 1.10 &&

            <div>
                <p></p>
            </div>
            } */}
        </div>
    </div>
)
}

export default GainsCard 

