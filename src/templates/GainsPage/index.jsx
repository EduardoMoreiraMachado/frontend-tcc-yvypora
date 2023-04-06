import Title from '../../components/Title'
// import Chart from '../../components/Chart'
import GainsCard from '../../components/GainsCard'
import './style.css'

export const GainsPage = () =>{
    return(
        <div className="gains-main-container">
            <Title text={'Relatório de ganhos/vendas'}/>
            <GainsCard title="Mensal" data={51} charts={true}/>
            
        </div>
    )
}
export default GainsPage