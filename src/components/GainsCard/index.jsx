import { Chart } from 'react-charts'
import './style.css'

export const GainsCard = ({title,data,charts}) =>{

return(
   <div class Name="card-gain-container">
        <p>{title}</p>
        <p>{data}</p>
        <div className={charts ? "charts-container" : "charts-container-disable"}>
            <Chart/>
        </div>
    </div>
)

}

export default GainsCard 

