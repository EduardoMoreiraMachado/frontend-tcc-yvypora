import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { Footer } from '../../components/Footer';
import { AddImage } from '../../components/AddImage';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { GreenButton } from '../../components/GreenButton';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useEffect, useRef, useState } from 'react';

import {
  addPictureToProduct,
  addSaleOff,
  createProduct,
  removePictureToProduct,
  removeSaleOff,
  updateProduct,
} from '../../services/api/fetchs/marketer/productFetch';

import { useLocation, useNavigate } from 'react-router-dom';
import { getProduct } from '../../services/api/fetchs/costumer/products';
import {
  isValidProductData,
  validate,
  validateProduct,
} from '../../utils/validations/product';
import { notify } from '../../utils/notify';

const MySwal = withReactContent(Swal);

export const InsertProductPage = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [previousProduct, setPreviousProduct] = useState(null);
  const [previousProductImage, setPreviousProductImage] = useState(null);

  const location = useLocation();
  const [loading, setLoading] = useState(false)
  const inputSaleOff = useRef(null);
  const inputWeight = useRef(null);
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );

  const descriptionInput = useRef(null);
  const nameInput = useRef(null);
  const [previousImage, setPreviousImage] = useState(null);
  const priceInput = useRef(null);
  const availableInput = useRef(null);

  const [formData, setFormData] = useState({});

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { state } = location;

    if (state) {
      setIsUpdate(true);
      
      getProduct(state.product)
        .then(({ data }) => {
          const image = data.image_of_product.map(({ image }) => image.uri)[0]
          setPreviousImage(image);
          setPreviousProduct(data);
          setPreviousImage(data.image_of_product.map((image) => image.uri)[0])
          setDescription(data.description);
          setName(data.name);
          setPrice(data.price);
          setAmount(data.available_quantity);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  const getData = async () => {
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.available
    ) {
      formData['description'] = descriptionInput.current.value;
      formData['name'] = nameInput.current.value;
      formData['price'] = priceInput.current.value;
      formData['available'] = availableInput.current.value;
    }

    const image = document.getElementById('file-selection').files[0];

    const inputs = document.querySelectorAll('.product-input');

    const categorySelector = document.getElementById('type');

    const priceTypeSelector = document.getElementById('price-type');

    const categoryOptionSelected =
      categorySelector.options[categorySelector.selectedIndex];
    console.log(categoryOptionSelected);
    const priceTypeOptionSelected =
      priceTypeSelector.options[priceTypeSelector.selectedIndex];

    console.log(priceTypeOptionSelected, categoryOptionSelected);

    const description = formData.description;

    const name = formData.name;
    let quantity = null;
    let price = formData.price;

    const availableQuantity = formData.available;
    const saleOffValue = inputSaleOff.current.value;

    if (priceTypeOptionSelected.value === 'peso') {
      quantity = inputWeight.current.value;
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

    return data;
  };

  const create = async (event) => {
    setLoading(true)
    event.preventDefault();
    const image = document.getElementById('file-selection').files[0];

    const saleOffValue = inputSaleOff.current.value;

    const data = await getData();

    try {
      if (!isValidProductData({ ...data, quantity: 100 })) {
        await notify('error', 'Algo não foi preenchido corretamente!', 5000);
        return null;
      }
    } catch (e) {
      return null;
    }

    try {
      const { payload } = await createProduct(data);
      const { id } = payload.data;

      const formdata = new FormData();

      formdata.append('picture', image);

      console.log('formdata', formdata);

      await addPictureToProduct({ id: id, formData: formdata }); // is required

      if (saleOffValue) {
        try {
          await addSaleOff({ id, value: saleOffValue });
          MySwal.fire({
            timer: 1500,
            showConfirmButton: false,
            title: <p>Produto cadastrado com sucesso</p>,
            icon: 'success',
            buttonsStyling: false,
            timerProgressBar: true,
          });
        } catch (error) {
          MySwal.fire({
            timer: 1500,
            showConfirmButton: false,
            title: <p>Falha ao cadastrar produto</p>,
            icon: 'error',
            buttonsStyling: false,
            timerProgressBar: true,
          });
        }
      } else {
        MySwal.fire({
          timer: 1500,
          showConfirmButton: false,
          title: <p>Produto cadastrado com sucesso</p>,
          icon: 'success',
          buttonsStyling: false,
          timerProgressBar: true,
        });
      }
      setLoading(false)
      navigate('/marketer/products')
    } catch (e) {
      setLoading(false)
      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Falha ao cadastrar produto</p>,
        icon: 'error',
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  const update = async (event) => {
    event.preventDefault();
    setLoading(true)
    const image = document.getElementById('file-selection').files[0];

    const saleOffValue = inputSaleOff.current.value;

    const data = await getData();

    try {
      await updateProduct(previousProduct.id, data);

      console.log(saleOffValue);

      const lastSaleOffValue = previousProduct.sale_off.map(
        ({ value }) => value
      )[0];

      const hasSaleOff = previousProduct?.sale_off.length > 0 ? true : false;

      if (hasSaleOff && !saleOffValue) {
        await removeSaleOff({ id: previousProduct.id });
      } else if (lastSaleOffValue && lastSaleOffValue !== saleOffValue) {
        await removeSaleOff({ id: previousProduct.id });
        await addSaleOff({ id: previousProduct.id, value: saleOffValue });
      } else if (saleOffValue) {
        await addSaleOff({ id: previousProduct.id, value: saleOffValue });
      }

      if (image) {
        const pictureFormData = new FormData();
        pictureFormData.append('picture', image);
        await removePictureToProduct({
          productId: previousProduct.id,
          pictureId: previousProduct.image_of_product.map(
            ({ imageId }) => imageId
          )[0],
        });
        await addPictureToProduct({
          id: previousProduct.id,
          formData: pictureFormData,
        });
      }
      notify("success", "Produto atualizado com sucesso", 5000)
      setLoading(false)
      navigate('/marketer/products')
    } catch (err) {
      setLoading(false)
      console.log(err);
      notify("error", "Falha ao atualizar produto", 10000)
    }
  };

  const handleWeightChange = (event) => {
    setValue(event.target.value);
    handleChangeFields(event);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    handleChangeFields(event);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    handleChangeFields(event);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    handleChangeFields(event);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);

    handleChangeFields(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === '-' || event.key === '+' || event.key === 'e') {
      event.preventDefault();
    }
  };

  return (
    <div className={styles['insert-product-page']}>
      <Header user={user} />
      <Title
        text={isUpdate ? 'Atualizar o produto' : 'Inserir um novo produto'}
      />

      <div className={styles['data-containers']}>
        <div className={styles['insert-product-data']}>
          <div className={styles['drop-box']}>
            <label
              className={styles['product-input-title']}
              htmlFor='product-type'
            >
              Categoria:
            </label>
            <select
              name='product-type'
              id='type'
              defaultValue={
                previousProduct
                  ? previousProduct.category_of_product.name.toLowerCase()
                  : ''
              }
            >
              <option value='frutas' id='0'>
                Fruta
              </option>
              <option value='verduras' id='1'>
                Verdura
              </option>
              <option value='especiarias' id='2'>
                Especiaria
              </option>
              <option value='outros' id='3'>
                Outro
              </option>
            </select>
          </div>

          <div className={styles['input-container']}>
            <h1 className={styles['product-input-title']}>Nome:</h1>
            <input
              value={name}
              name='name'
              className={styles['product-input']}
              type='text'
              ref={nameInput}
              onChange={handleNameChange}
            />
          </div>

          <div className={styles['input-container']}>
            <h1 className={styles['product-input-title']}>Descrição:</h1>
            <textarea
              value={description}
              cols='30'
              rows='5'
              ref={descriptionInput}
              maxLength='200'
              id={styles['description']}
              name='description'
              onChange={handleDescriptionChange}
            />
          </div>

          <div className={styles['price-values']}>
            <h1
              className={styles['product-input-title']}
              htmlFor='product-type'
            >
              Preço
            </h1>
            <div className={styles['drop-box']} id={styles['options-weight']}>
              <div className={styles['options-weight']}>
                <select
                  value={selectedValue}
                  onChange={handleChange}
                  name='product-type'
                  id='price-type'
                >
                  <option value='duzia' id='3'>
                    Dúzia
                  </option>
                  <option value='peso' id='1'>
                    Peso
                  </option>
                  <option value='unitario' id='2'>
                    Unitário
                  </option>
                </select>

                {selectedValue === 'peso' && (
                  <div className={styles['product-weight']}>
                    <select name='product-unit' id={styles['unit']}>
                      <option value='kg'>kg</option>
                      <option value='g'>g</option>
                    </select>
                    <input
                      className={styles['product-input']}
                      ref={inputWeight}
                      type='number'
                      min='0'
                      max='100'
                      step='.01'
                      onChange={handleWeightChange}
                      onKeyDown={handleKeyDown}
                      value={value}
                    />
                  </div>
                )}
              </div>

              <div className={styles['product-price']}>
                <h1 className={styles['product-price-coin']}>R$</h1>
                <input
                  className={styles['product-input']}
                  type='number'
                  min='0'
                  max='100'
                  step='.01'
                  name='price'
                  onChange={handlePriceChange}
                  onKeyDown={handleKeyDown}
                  value={price}
                  ref={priceInput}
                />
              </div>
            </div>
          </div>

          <div className={styles['promotion']}>
            <h1 className={styles['product-input-title']}>Desconto:</h1>
            <ToggleSwitch
              inputRef={inputSaleOff}
              defaultCheckedValue={
                previousProduct?.sale_off.length > 0 ? true : false
              }
            />
          </div>
        </div>

        <div className={styles['insert-image-data']}>
          <div className={styles['product-quantity']}>
            <h1 className={styles['product-input-title']}>
              Quant. disponível:
            </h1>
            <input
              className={styles['product-input']}
              id='available-quant'
              type='number'
              name='available'
              min='0'
              max='100'
              ref={availableInput}
              step='1'
              onChange={handleAmountChange}
              onKeyDown={handleKeyDown}
              value={amount}
            />
          </div>
          {console.log(
            previousImage
          )}
          <AddImage
            currentImage={previousImage}
            text='Imagem do produto'
            subtext='Anexe uma imagem do produto que ficará visível ao cliente'
          />

          <div className={styles['register-button']}>
            <GreenButton
              text={isUpdate ? 'Atualizar' : 'Cadastrar'}
              onClick={async (event) => {
                if (!isUpdate) await create(event);
                else await update(event);
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsertProductPage;
