import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import './style.css';

export const Test = () => {

    return (
        <>
            <ShoppingCartItem 
                name='Abóbora'
                imgUrl='https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'
                unit={1}
                price={10}
            />
        </>
    )

}

export default Test;
