import './style.css'

export const UserCard = ({imgUrl, name, email}) => {
    return(
        <div className='user-card-container'>
            <div className='user-card-image-container'>
                <img className='user-card-image' src={imgUrl} alt=""/>
            </div>
            <div className='user-card-text'>
                <h1 className='user-card-name'>{name}</h1>
                <h2 className='user-card-email'>{email}</h2>
            </div>
        </div>
    )
}
