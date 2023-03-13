import './style.css'
import {EmptyHeader} from '../../components/EmptyHeader'
import {NavBar} from '../../components/NavBar'
import Title from '../../components/Title'
import FairNearCard from '../../components/FairNearCard'

export const FairNear = () =>{
    return(
        <div>
            <EmptyHeader/>
            <Title text={'Feiras Próximas'}/>
            <NavBar/>
            <FairNearCard title={'Feira Livre da Rua Oscar Freire'}
            />
        </div>
    )
}

export default FairNear