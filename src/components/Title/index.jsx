import './style.css'

export const Title = ({text, subtitle}) =>{
    return(
        <div className="title">
            <h1>{text}</h1>
            <h2>{subtitle}</h2>
        </div>
    )

}
export default Title