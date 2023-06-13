import styles from './styles.module.css'

import { Footer } from '../../components/Footer'
import { MoreTextOption } from '../../components/MoreTextOption'

import YvyporaTextIcon from '../../imgs/yvypora_text_icon.svg'
import ShoppingBag from '../../imgs/shopping_bag.png'
import GainIcon from '../../imgs/gain_icon.png'
import HealthyFoodIcon from '../../imgs/healthy_food_icon.png'
import SecretaryIcon from '../../imgs/secretary_icon.png'
import LocationIcon from '../../imgs/location_icon.png'

export const EntregadorLandingPage = () => {
    return(
        <div className={styles["entregador-landing-page-container"]}>
            <header id={styles['header-entregador']}>
                <a className={styles['header-icon']} id={styles['default-header-icon']} href='/signup'>
                    <img className='text-icon' src={YvyporaTextIcon} alt=''/>
                </a>
                <div className={styles["header-links"]}>
                    <a href='#benefits'>Vantagens</a>
                    <a href='#info'>Entregas</a>
                    <a href='#about'>Sobre a plataforma</a>
                </div>
            </header>
            <div className={styles["welcome-message-content"]}>
                <div className={styles['welcome-message']}>
                    <h1>Faça parte da família yvyporã!</h1>
                    <p>Junte-se a nós e seja um motorista de entrega na yvyporã! Explore novos lugares, tenha flexibilidade de horários e ganhe dinheiro enquanto entrega produtos frescos e saborosos aos clientes que desejam experimentar o melhor das feiras típicas de bairros brasileiros. Baixe o nosso aplicativo de entregadores e faça parte dessa oportunidade única!</p>
                </div>
            </div>
            <div className={styles["benefits-content"]} id='benefits'>
                <h1>Vantagens</h1>
                <div className={styles['benefits']}>
                    <div className={styles['benefit']}>
                        <img src={ShoppingBag} alt=''/> 
                        <span>Flexibilidade de horários</span>
                    </div>
                    <div className={styles['benefit']}>
                        <img src={ShoppingBag} alt=''/>
                        <span>Renda adicional</span>
                    </div>
                    <div className={styles['benefit']}>
                        <img src={ShoppingBag} alt=''/>
                        <span>Contribuição para a economia local</span>
                    </div>
                    <div className={styles['benefit']}>
                        <img src={ShoppingBag} alt=''/>
                        <span>Suporte e orientação</span>
                    </div>
                </div>
            </div>
            <div className={styles["info-content"]} id='info'>
                <h1>Entregas</h1>
                <div className={styles['entregador-options-container']}>
                    <MoreTextOption 
                        title='Como começar?'
                        text='
                        Comece a usar nossa plataforma como motorista de entrega de forma simples e rápida! Basta cadastrar-se em nosso aplicativo, passar pela verificação de segurança e treinamento online. Em seguida, defina sua disponibilidade e comece a receber notificações de pedidos próximos. Aceite os pedidos, entregue os produtos com eficiência e seja recompensado pelo seu trabalho. Junte-se a nós e faça parte dessa emocionante experiência de entrega nas feiras típicas de bairros brasileiros!'
                    />
                    <MoreTextOption 
                        title='Quais são os melhores horários para trabalhar'
                        text='
                        Descubra os melhores horários para trabalhar como motorista de entrega em nossa plataforma! Com flexibilidade total, você pode escolher os períodos em que deseja estar disponível para receber pedidos. Os horários de pico nas feiras típicas costumam ser durante os fins de semana e feriados, quando a demanda é maior. Além disso, os horários de almoço e jantar também são excelentes momentos para estar ativo, atendendo clientes famintos em busca de produtos deliciosos. Seja estratégico ao definir sua disponibilidade e aproveite ao máximo os horários mais movimentados para maximizar seus ganhos. Não perca tempo, cadastre-se agora e comece a aproveitar a flexibilidade dos melhores horários de trabalho em nossa plataforma!'
                    />
                    <MoreTextOption 
                        title='O que não fazer?'
                        text='Para garantir uma experiência positiva como motorista de entrega em nossa plataforma, é importante estar ciente de algumas práticas a evitar. Não se esqueça de seguir as diretrizes de trânsito e respeitar todas as leis e regulamentos locais. Evite realizar entregas em áreas de acesso restrito ou perigosas. Além disso, mantenha uma comunicação clara e respeitosa com os clientes, evitando atrasos desnecessários. Lembre-se de tratar os produtos dos vendedores com cuidado durante o transporte. Evite cancelar pedidos sem motivo justificável, pois isso pode impactar negativamente sua reputação como motorista de entrega. Ao evitar essas práticas, você contribui para uma experiência positiva para todos os envolvidos na plataforma. Junte-se a nós e seja um motorista de entrega exemplar em nossa plataforma de feiras típicas de bairros brasileiros!'
                    />
                    <MoreTextOption 
                        title='Como otimzar meu tempo?'
                        text='
                        A otimização do seu tempo como motorista de entrega em nossa plataforma é fundamental. Planeje rotas estratégicas, aproveite a tecnologia do nosso aplicativo móvel, mantenha uma comunicação clara com os clientes, esteja preparado com suprimentos essenciais e esteja atento aos horários de pico. Ao seguir essas dicas, você aumentará sua eficiência e produtividade, proporcionando uma excelente experiência de entrega nas feiras típicas de bairros brasileiros. Junte-se a nós e descubra como otimizar seu tempo e alcançar o sucesso como motorista de entrega em nossa plataforma!'
                    />
                    <MoreTextOption 
                        title='Mais dicas'
                        text='
                        Aqui estão algumas dicas adicionais para ajudar você a se destacar como motorista de entrega em nossa plataforma: mantenha-se atualizado com as últimas rotas e direções, esteja preparado para lidar com situações imprevistas, como tráfego intenso ou mudanças no clima, seja cordial e amigável com os vendedores e clientes, buscando sempre oferecer um serviço excepcional, e lembre-se de cuidar de si mesmo, descansando adequadamente e fazendo pausas regulares para garantir um desempenho consistente e de qualidade. Junte-se a nós e coloque essas dicas em prática para se tornar um motorista de entrega de destaque em nossa plataforma de feiras típicas de bairros brasileiros!'
                    />
                </div>
            </div>
            <div className={styles["about-content"]} id='about'>
                <h1>Sobre a plataforma</h1>
                <div className={styles['about-texts']}>
                    <div className={styles['about-text']}>
                        {/* <img src={GainIcon} alt=''/> */}
                        <div className={styles['about-image']} style={{backgroundImage: `url(${GainIcon})`}}></div>
                        <span>Acompanhe os ganhos de maneira fácil e simples!</span>
                    </div>
                    <div className={styles['about-text']}>
                        {/* <img src={HealthyFoodIcon} alt=''/> */}
                        <div className={styles['about-image']} style={{backgroundImage: `url(${HealthyFoodIcon})`}}></div>
                        <span>Trabalhe com os produtos mais saudáveis possíveis!</span>
                    </div>
                    <div className={styles['about-text']}>
                        {/* <img src={SecretaryIcon} alt=''/> */}
                        <div className={styles['about-image']} style={{backgroundImage: `url(${SecretaryIcon})`}}></div>
                        <span>Plataforma simplificada para melhor entendimento!</span>
                    </div>
                    <div className={styles['about-text']}>
                        {/* <img src={LocationIcon} alt=''/> */}
                        <div className={styles['about-image']} style={{backgroundImage: `url(${LocationIcon})`}}></div>
                        <span>Encontre as rotas mais rápidas para manter o produto o mais fresco possível!</span>
                    </div>
                </div>
            </div>
            <div id={styles['footer-entregador']}>
                <Footer />
            </div>
        </div>
    )
}

export default EntregadorLandingPage
