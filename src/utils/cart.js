export const addProduct = ({
  id,
  picture,
  name,
  price,
  quantity,
  selectedQuantity,
  marketerId,
  marketerName,
  fairPicture,
  fairName,
}) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        products: [],
        total: 0,
      })
    );
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  const isInCart = cart.products.findIndex(
    ({ id: productId }) => id === productId
  );

  if (isInCart >= 0) {
    if (cart.products[isInCart].selectedQuantity !== selectedQuantity) {
      cart.total = cart.total - parseFloat(cart.products[isInCart].price);

      cart.products[isInCart] = {
        id,
        picture,
        name,
        price,
        quantity,
        selectedQuantity,
        marketerId,
        marketerName,
        fairPicture,
        fairName,
      };

      cart.total = cart.total + parseFloat(price) * selectedQuantity;

      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
    } else {
      return;
    }
  } else {
    cart.products.push({
      id,
      picture,
      name,
      price,
      quantity,
      selectedQuantity,
      marketerId,
      marketerName,
      fairPicture,
      fairName,
    });

    cart.total = cart.total + parseFloat(price) * selectedQuantity;

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
};

export const initCart = () => {
  const cart = { products: [], total: 0 };
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateItemCount = ({ id, itemCount }) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  const index = cart.products.findIndex(
    ({ id: productId }) => id === productId
  );

  if (cart.products[index].selectedQuantity === itemCount) return;

  cart.total = cart.total -
    cart.products[index].price * cart.products[index].selectedQuantity;

  // eslint-disable-next-line no-unused-expressions
  cart.total = cart.total + cart.products[index].price * itemCount;

  cart.products[index].selectedQuantity = itemCount;

  console.log(cart.products[index].selectedQuantity);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateTotal = (value) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.total = value;
  localStorage.setItem("cart", JSON.stringify(cart));
};
