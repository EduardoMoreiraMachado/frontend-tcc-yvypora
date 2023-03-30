import './style.css'
import IconStar from '../../imgs/icon_star.svg'
import IconWork from '../../imgs/clock.svg'
import IconCalendar from '../../imgs/calendartick.svg'
import IconFairmen from '../../imgs/icon_feirante.svg'
import { NavigationType } from 'react-router-dom'


export const FairNearCard = ({title,img,note,dayWorkText, hourWorkText,fairmanText}) =>{
    return (
        <div className="main-card">
        <div className="card-container">
                <img src={img} alt="" className="img-card"/>
            <div className="content-container">
            <div className="header-card">
                 <h2>{title}</h2>
                <div className="note-container">
                    <img src={IconStar} alt="" />
                    <p>{note}</p>
                 </div>
            </div>
            <div className="containers">
                <img src={IconWork} alt="" />
                <p>{dayWorkText}</p>
            </div>
            <div className="containers">
                <img src={IconCalendar} alt="" />
                <p>{hourWorkText}</p>
            </div>
            <div className="containers">
                <img src={IconFairmen} alt="" />
                <p>{fairmanText}</p>
            </div>
            </div>
        </div>
        </div>
    )
}
export default FairNearCard