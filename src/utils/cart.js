
class Cart {
  
}

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
  let cart = JSON.parse(sessionStorage.getItem("cart"));

  if (!cart) {
    sessionStorage.setItem(
      "cart",
      JSON.stringify({
        products: [],
        total: 0,
      })
    );
    cart = JSON.parse(sessionStorage.getItem("cart"));
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

      sessionStorage.setItem("cart", JSON.stringify(cart));
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

    sessionStorage.setItem("cart", JSON.stringify(cart));
    
    window.location.reload(true)
    
    console.log(cart);
  }
};

export const initCart = () => {
  const cart = { products: [], total: 0 };
  sessionStorage.setItem("cart", JSON.stringify(cart));
};

export const updateItemCount = ({ id, itemCount }) => {
  let cart = JSON.parse(sessionStorage.getItem("cart"));

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

  sessionStorage.setItem("cart", JSON.stringify(cart));
};

export const updateTotal = (value) => {
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  cart.total = value;
  sessionStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (_id) => {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  
  const index = cart.products.findIndex(product => product.id === _id)

  cart.products.slice(index, 1)
  
  if (cart.products.length === 1) {
    cart.products = []  
  }

  console.log(cart.products)

  sessionStorage.setItem("cart", JSON.stringify(cart));  
}