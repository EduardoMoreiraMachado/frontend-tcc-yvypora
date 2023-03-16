import './style.css'

import { Footer } from '../../components/Footer'
import { UserCard } from '../../components/UserCard'
import { Title } from '../../components/Title'
import { NavBar } from '../../components/NavBar'
import { Fair } from '../../components/Fair'
import { GreenButton } from '../../components/GreenButton'
import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'

export const RegisteredFairsPage = () => {
    return(
        <div className='registered-fairs-page'>
            <header>
                <img className='text-icon' src={YvyporaTextIcon} alt=""/>
                <UserCard
                    imgUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="Carlos Arcanjo"
                    email="carlaoprof@gmail.com"
                />
            </header>
            <Title 
                text="Feiras"
            />
            <div className='fairs-content'>
                <NavBar />
                <div className='fairs-list'>
                    <div className='fairs'>
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                        <Fair 
                            imgUrl="https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png"
                            name="Feira do Brother"
                            days="Terça e Quinta" 
                            hours="07:30 até as 12:00"
                        />
                    </div>
                    <GreenButton 
                        text="Adicionar feira"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegisteredFairsPage
