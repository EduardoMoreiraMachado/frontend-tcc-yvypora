import styles from './style.module.css'

export const Fair = ({imgUrl, name, days, hours}) => {
    return(
        <div className='fair-container'>
            <div className='fair-image'>
                <img className='image' src={imgUrl} alt=''/>
            </div>
            <div className='fair-info'>
                <span className='name'>{name}</span>
                <div className='data-info'>
                    <div className='data'>
                        <h1 className='data-type'>Dias:</h1>
                        <h1 className='data-text' id='days'>{days}</h1>
                    </div>
                    <div className='data'>
                        <h1 className='data-type'>Horário de funcionamento:</h1>
                        <h1 className='data-text'>{hours}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
