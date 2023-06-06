import styles from "./styles.module.css";

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

import { Footer } from "../../components/Footer";
import { AddImage } from "../../components/AddImage";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { GreenButton } from "../../components/GreenButton";

import { useState } from "react";


export const InsertProductPage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  const handleWeightChange = (event) => {
    setValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "-" || event.key === "+" || event.key === "e") {
      event.preventDefault();
    }
  };

  return (
    <div className={styles["insert-product-page"]}>
      <Header user={user}/>
      <Title text="Editar o produto (...)" />

      <div className={styles["data-containers"]}>
        <div className={styles["insert-product-data"]}>
          <div className={styles["drop-box"]}>
            <label
              className={styles["product-input-title"]}
              htmlFor="product-type"
            >
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

          <div className={styles["input-container"]}>
            <h1 className={styles["product-input-title"]}>Nome:</h1>
            <input
              name="name"
              className={styles["product-input"]}
              type="text"
            />
          </div>

          <div className={styles["input-container"]}>
            <h1 className={styles["product-input-title"]}>Descrição:</h1>
            <textarea
              cols="30"
              rows="5"
              maxLength="200"
              id={styles["description"]}
              name="description"
            />
          </div>

          <div className={styles["price-values"]}>
            <h1
              className={styles["product-input-title"]}
              htmlFor="product-type"
            >
              Preço
            </h1>
            <div className={styles["drop-box"]} id={styles["options-weight"]}>
              <div className={styles["options-weight"]}>
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
                  <div className={styles["product-weight"]}>
                    <select name="product-unit" id={styles["unit"]}>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                    </select>
                    <input
                      className={styles["product-input"]}
                      type="number"
                      min="0"
                      max="100"
                      step=".01"
                      onChange={handleWeightChange}
                      onKeyDown={handleKeyDown}
                      value={value}
                    />
                  </div>
                )}
              </div>

              <div className={styles["product-price"]}>
                <h1 className={styles["product-price-coin"]}>R$</h1>
                <input
                  className={styles["product-input"]}
                  type="number"
                  min="0"
                  max="100"
                  step=".01"
                  name="price"
                  onChange={handlePriceChange}
                  onKeyDown={handleKeyDown}
                  value={price}
                />
              </div>
            </div>
          </div>

          <div className={styles["promotion"]}>
            <h1 className={styles["product-input-title"]}>Desconto:</h1>
            <ToggleSwitch />
          </div>
        </div>

        <div className={styles["insert-image-data"]}>
          <div className={styles["product-quantity"]}>
            <h1 className={styles["product-input-title"]}>
              Quant. disponível:
            </h1>
            <input
              className={styles["product-input"]}
              id="available-quant"
              type="number"
              name="available"
              min="0"
              max="100"
              step="1"
              onChange={handleAmountChange}
              onKeyDown={handleKeyDown}
              value={amount}
            />
          </div>

          <AddImage
            text="Imagem do produto"
            subtext="Anexe uma imagem do produto que ficará visível ao cliente"
          />

          <div className={styles["register-button"]}>
            <GreenButton text="Cadastrar" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsertProductPage;
