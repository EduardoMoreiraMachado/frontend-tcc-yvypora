import './style.css'
import {EmptyHeader} from '../../components/EmptyHeader'
import {NavBar} from '../../components/NavBar'
import Title from '../../components/Title'
import FairNearCard from '../../components/FairNearCard'
import { Footer } from '../../components/Footer'

export const FairNear = () =>{
    return(
        <div>
            <EmptyHeader/>
            <Title text={'Feiras Próximas'}/>
            div.
            <NavBar/>
            <FairNearCard 
                title={'Feira Livre da Rua Oscar Freire'}
                img={'https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/15220191645824798_5zxyp.jpg'} 
                note={3.5}
                dayWorkText ={'Domingo'}
                hourWorkText = {'08:00 - 16:00'}
                fairmanText = {'Aprox 4 feirantes cadastrados no yvy'}
            />
            {/* <FairNearCard 
                title={'Feira Noturna de Barueri'}
                img={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/d6/a8/a-movimentacao-da-feira.jpg?w=1200&h=1200&s=1'} 
                note={4.5}
                dayWorkText ={'Terça'}
                hourWorkText = {'18:00 - 23:00'}
                fairmanText = {'Aprox 56 feirantes cadastrados no yvy'}
            />
             <FairNearCard 
                title={'Feira Livre da Rua Oscar Freire'}
                img={'https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/15220191645824798_5zxyp.jpg'} 
                note={3.5}
                dayWorkText ={'Domingo'}
                hourWorkText = {'08:00 - 16:00'}
                fairmanText = {'Aprox 4 feirantes cadastrados no yvy'}
            /> */}
            
            <Footer/>

                
        </div>
    )
}


export default FairNear