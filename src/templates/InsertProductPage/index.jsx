import './style.css'

import { EmptyHeader } from '../../components/EmptyHeader'
import { Title } from '../../components/Title'

export const InsertProductPage = () => {
    return(
        <div className='insert-product-page'>
            <EmptyHeader />
            <Title text="Inserir um novo produto"/>
            <div className='right-container'>
                <div className='drop-box'>
                    <label for="product-type">Categoria:</label>
                    <select name="product-type" id="type">
                        <option value="fruta">Fruta</option>
                        <option value="verdura">Verdura</option>
                        <option value="especiaria">Especiaria</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <h1 className='product-input-title'>Nome:</h1>
                <input className="product-title-input" type="text"/>
                <h1 className='product-input-title'>Descrição:</h1>
                <textarea cols="30" rows="5"></textarea>
            </div>
            <div className='mid-container'></div>
            <div className='left-container'></div>
        </div>
    )
}

export default InsertProductPage