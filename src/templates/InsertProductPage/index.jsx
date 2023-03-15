import "./style.css";

import { EmptyHeader } from "../../components/EmptyHeader";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { AddImage } from "../../components/AddImage";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { GreenButton } from "../../components/GreenButton";

import { useState } from "react";
import { createProduct } from "../../utils/productFetch";

export const InsertProductPage = () => {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  async function handleClick(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll(".product-input");

    const categorySelector = document.getElementById("type");

    const priceTypeSelector = document.getElementById("price-type");

    const categoryOptionSelected =
      categorySelector.options[categorySelector.selectedIndex];
    const priceTypeOptionSelected =
      priceTypeSelector.options[priceTypeSelector.selectedIndex];

    const description = document.getElementById("description").value;
    const name = inputs[0].value;
    const price = inputs[1].value;
    const availableQuantity = document.getElementById("available-quant").value;

    const data = {
      category: {
        name: categoryOptionSelected.value,
        id: parseInt(categoryOptionSelected.id),
      },
      name,
      description,
      price: parseFloat(price),
      price_type: {
        id: parseInt(priceTypeOptionSelected.id),
        name: priceTypeOptionSelected.value,
      },
      available_quantity: parseInt(availableQuantity, 10),
    };

    const res = await createProduct(data)
  }
  return (
    <div className="insert-product-page">
      <EmptyHeader />
      <Title text="Inserir um novo produto" />

      <div className="data-containers">
        <div className="insert-product-data">
          <div className="drop-box">
            <label className="product-input-title" htmlFor="product-type">
              Categoria:
            </label>
            <select name="product-type" id="type">
              <option value="fruta" id="1">
                Fruta
              </option>
              <option value="verdura" id="2">
                Verdura
              </option>
              <option value="especiaria" id="3">
                Especiaria
              </option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="input-container">
            <h1 className="product-input-title">Nome:</h1>
            <input className="product-input" type="text" />
          </div>

          <div className="input-container">
            <h1 className="product-input-title">Descrição:</h1>
            <textarea
              cols="30"
              rows="5"
              maxLength="200"
              id="description"
            ></textarea>
          </div>

          <div className="price-values">
            <h1 className="product-input-title" htmlFor="product-type">
              Preço
            </h1>
            <div className="drop-box" id="options-weight">
              <div className="options-weight">
                <select
                  value={selectedValue}
                  onChange={handleChange}
                  name="product-type"
                  id="price-type"
                >
                  <option value="duzia" id="3">
                    Dúzia
                  </option>
                  <option value="peso" id="1">
                    Peso
                  </option>
                  <option value="unitario" id="2">
                    Unitário
                  </option>
                </select>

                {selectedValue === "peso" && (
                  <div className="product-weight">
                    <select name="product-unit" id="unit">
                      <option value="kg">Kg</option>
                      <option value="g">g</option>
                    </select>
                    <input
                      className="product-input"
                      type="number"
                      min="0"
                      max="100"
                      step=".01"
                    />
                  </div>
                )}
              </div>

              <div className="product-price">
                <h1 className="product-price-coin">R$</h1>
                <input
                  className="product-input"
                  type="number"
                  min="0"
                  max="100"
                  step=".01"
                />
              </div>
            </div>
          </div>

          <div className="promotion">
            <h1 className="product-input-title">Promoção:</h1>
            <ToggleSwitch />
          </div>
        </div>

        <div className="insert-image-data">
          <div className="product-quantity">
            <h1 className="product-input-title">Quant. disponível:</h1>
            <input
              className="product-input"
              id="available-quant"
              type="number"
              min="0"
              max="100"
              step="1"
            />
          </div>

          <AddImage
            text="Imagem do produto"
            subtext="Anexe uma imagem do produto que ficará visível ao cliente"
          />

          <div className="register-button">
            <GreenButton text="Cadastrar" onClick={handleClick} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsertProductPage;
