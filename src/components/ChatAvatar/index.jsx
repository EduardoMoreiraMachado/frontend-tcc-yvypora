import './styles.css'

export const ChatAvatar = ({image, isOnline}) => {
    return (
    <div className="avatar">
        <div className="avatar-img">
        <img src={image} alt="#" />
        </div>
        <span className={`isOnline ${isOnline}`}></span>
    </div>
    )
}
