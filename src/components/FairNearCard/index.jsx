import './style.css'
import IconStar from '../../imgs/icon_star.svg'
import IconWork from '../../imgs/clock.svg'
import IconCalendar from '../../imgs/canlendartick.svg'
import IconFairmen from '../../imgs/icon_feirante.svg'


export const FairNearCard = ({title},{note},{dayWorkText}, {hourWorkText},{fairmanText}) =>{
    return (
        <div className="card-container">
            <div className="header-card">
                 <h2>{title}</h2>
                 <img src={IconStar} alt="" />
                 <p>{note}</p>
            </div>
            <div className="day-work-container">
                <p>{dayWorkText}</p>
                <img src={IconWork} alt="" />
            </div>
            <div className="hour-work-container">
                <p>{dayWorkText}</p>
                <img src={IconCalendar} alt="" />
            </div>
            <div className="fairmen-container">
                <p>{fairmanText}</p>
                <img src={IconFairmen} alt="" />
            </div>

           


        </div>
    )
}
export default FairNearCard