import './style.css'
import IconStar from '../../imgs/icon_star.svg'


export const FairNearCard = ({title},{dayWork}) =>{
    return (
        <div className="card-container">
            <div className="header-card">
                 <h2>{title}</h2>
                 <img src={IconStar} alt="" />
            </div>
            <div className="day-work-container">
                <p>{dayWork}</p>
                
            </div>
           


        </div>
    )
}
export default FairNearCard