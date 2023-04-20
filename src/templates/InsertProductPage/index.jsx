import styles from './style.module.css';

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

import { Footer } from "../../components/Footer";
import { AddImage } from "../../components/AddImage";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { GreenButton } from "../../components/GreenButton";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useState } from "react";

import {
  addPictureToProduct,
  addSaleOff,
  createProduct,
} from "../../utils/fetchs/Marketer/productFetch";

const MySwal = withReactContent(Swal);

export const InsertProductPage = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-details"))
  );
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    const image = document.getElementById("file-selection").files[0];
    console.log(image);

    const inputs = document.querySelectorAll(".product-input");

    const categorySelector = document.getElementById("type");

    const priceTypeSelector = document.getElementById("price-type");

    const categoryOptionSelected =
      categorySelector.options[categorySelector.selectedIndex];
    const priceTypeOptionSelected =
      priceTypeSelector.options[priceTypeSelector.selectedIndex];

    const description = document.getElementById("description").value;

    const name = inputs[0].value;
    let quantity = null;
    let price = inputs[1].value;

    const availableQuantity = document.getElementById("available-quant").value;
    const saleOffValue = document.querySelectorAll(".input-active")[0]?.value;

    console.log(saleOffValue);


    if (priceTypeOptionSelected.value === "peso") {
      quantity = inputs[1].value;
      price = inputs[2].value;
    }

    const data = {
      category: {
        name: categoryOptionSelected.value,
        id: parseInt(categoryOptionSelected.id),
      },
      quantity,
      name,
      description,
      price: parseFloat(price),
      price_type: {
        id: parseInt(priceTypeOptionSelected.id),
        name: priceTypeOptionSelected.value,
      },
      available_quantity: parseInt(availableQuantity, 10),
    };

    console.log(data);

    try {
      const { payload } = await createProduct(data);
      const { id } = payload.data;

      const formdata = new FormData();

      formdata.append("picture", image);

      console.log("formdata", formdata);

      await addPictureToProduct({ id: id, formData: formdata }); // is required

      if (saleOffValue) {
        try {
          await addSaleOff({ id, value: saleOffValue });
          MySwal.fire({
            timer: 1500,
            showConfirmButton: false,
            title: <p>Produto Cadastrado Com Sucesso!</p>,
            icon: "success",
            buttonsStyling: false,
            timerProgressBar: true,
          });
        } catch (error) {
          MySwal.fire({
            timer: 1500,
            showConfirmButton: false,
            title: <p>Falha Ao Cadastrar!</p>,
            icon: "error",
            buttonsStyling: false,
            timerProgressBar: true,
          });
        }
      } else {
        MySwal.fire({
          timer: 1500,
          showConfirmButton: false,
          title: <p>Produto Cadastrado Com Sucesso!</p>,
          icon: "success",
          buttonsStyling: false,
          timerProgressBar: true,
        });
      }
    } catch (e) {
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Falha Ao Cadastrar!</p>,
        icon: "error",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
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
      <Header user={user} />
      <Title text="Inserir um novo produto" />

      <div className={styles["data-containers"]}>
        <div className={styles["insert-product-data"]}>
          <div className={styles["drop-box"]}>
            <label className={styles["product-input-title"]} htmlFor="product-type">
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
            <input className={styles["product-input"]} type="text" />
          </div>

          <div className={styles["input-container"]}>
            <h1 className={styles["product-input-title"]}>Descrição:</h1>
            <textarea cols="30" rows="5" maxLength="200" id={styles["description"]}/>
          </div>

          <div className={styles["price-values"]}>
            <h1 className={styles["product-input-title"]} htmlFor="product-type">
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
            <h1 className={styles["product-input-title"]}>Quant. disponível:</h1>
            <input
              className={styles["product-input"]}
              id="available-quant"
              type="number"
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
            <GreenButton text="Cadastrar" onClick={handleClick} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsertProductPage;
