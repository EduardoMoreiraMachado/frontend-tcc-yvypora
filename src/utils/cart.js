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
  fairName
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
      cart.total =
        cart.total -
        parseFloat(cart.products[isInCart].price.replace(",", "."));

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
        fairName
      };

      cart.total = cart.total + parseFloat(price.replace(",", "."));

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
      fairName
    });

    cart.total = cart.total + parseFloat(price.replace(",", "."));

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
};

export const initCart = () => {
  const cart = { products: [], total: 0 };
  localStorage.setItem("cart", JSON.stringify(cart));
};
