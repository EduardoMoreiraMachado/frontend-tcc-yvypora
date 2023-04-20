import styles from './style.module.css'

export const UserImage = ({imgUrl}) => {
    return(
        <div className='user-image-container'>
            <img className='user-image' src={imgUrl} alt=""/>
        </div>
    )
}
export default UserImage