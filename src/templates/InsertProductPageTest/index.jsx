import './style.css'

import { EmptyHeader } from '../../components/EmptyHeader'
import { Title } from '../../components/Title'
import { Footer } from '../../components/Footer'
import { AddImage } from '../../components/AddImage'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { GreenButton } from '../../components/GreenButton'

import { useState } from "react";

export const InsertProductPageTest = () => {
    const [selectedValue, setSelectedValue] = useState("")

    function handleChange(event) {
        setSelectedValue(event.target.value)
    }

    return(
        <div className='insert-product-page'>
            <EmptyHeader />
            <Title text="Inserir um novo produto"/>

            <div className='data-containers'>
            
                <div className='insert-product-data'>

                    <div className='drop-box'>
                        <label className='product-input-title' htmlFor="product-type">Categoria:</label>
                        <select name="product-type" id="type">
                            <option value="fruta">Fruta</option>
                            <option value="verdura">Verdura</option>
                            <option value="especiaria">Especiaria</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <h1 className='product-input-title'>Nome:</h1>
                        <input className="product-input" type="text"/>
                    </div>

                    <div className='input-container'>
                        <h1 className='product-input-title'>Descrição:</h1>
                        <textarea cols="30" rows="5" maxLength="200"></textarea>
                    </div>

                    <div className='price-values'>
                        <h1 className='product-input-title' htmlFor="product-type">Preço</h1>
                        <div className='drop-box' id='options-weight'>
                            <div className='options-weight'>
                                <select value={selectedValue} onChange={handleChange} name="product-type" id="type">
                                    <option value="duzia">Dúzia</option>
                                    <option value="peso">Peso</option>
                                    <option value="unitario">Unitário</option>
                                </select>

                                {selectedValue === "peso" && (
                                    <div className='product-weight'>
                                        <select name="product-unit" id="unit">
                                            <option value="kg">Kg</option>
                                            <option value="g">g</option>
                                        </select>
                                        <input className='product-input' type="number" min="0" max="100" step=".01"/>   
                                    </div>
                                )}
                            </div>

                            <div className='product-price'>
                                <h1 className='product-price-coin'>R$</h1>
                                <input className='product-input' type="number" min="0" max="100" step=".01"/>   
                            </div>
                        </div>
                    </div>

                    <div className='promotion'>
                        <h1 className='product-input-title'>Promoção:</h1>
                        <ToggleSwitch />
                    </div>

                </div>

                <div className='insert-image-data'>

                    <AddImage 
                        text="Imagem do produto"
                        subtext="Anexe uma imagem do produto que ficará visível ao cliente"
                    />

                    <div className='register-button'>
                        <GreenButton 
                            text="Cadastrar"
                        />
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )

}

export default InsertProductPageTest