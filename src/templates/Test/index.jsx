import { DefaultInput } from '../../components/DefaultInput';
import { ShoppingItem } from '../../components/ShoppingItem';
import './style.css';

export const Test = () => {

    return (
        <>
            <ShoppingItem 
                name='Abobrinha'
                imgUrl='https://us-southeast-1.linodeobjects.com/storage/comercial-supermercado-genesio/media/uploads/produto/abobrinha_italiana_kg_8753cd49-6b6a-4033-9faf-cb8fcaea55c1.png'
                weight='200g'
                price='6,00'
            />
            <DefaultInput
                name="Nome do cartão"
                type="text"
            />
        </>
    )

}

export default Test;
