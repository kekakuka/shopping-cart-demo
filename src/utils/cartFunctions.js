const cart = 'cart';

export const addToCart = (listItems, product) => {
  let result;
  if (listItems.find((oneItem) => oneItem.id === product.id)) {
    result = listItems.map((oneItem) => {
      if (oneItem.id === product.id) {
        return { ...oneItem, quantity: oneItem.quantity + 1 };
      }
      return oneItem;
    });
  } else {
    result = [...listItems, { ...product, quantity: 1 }];
  }

  localStorage.setItem(cart, JSON.stringify(result));
  return result;
};
export const removeFromCart = (listItems, id) => {
  const result = listItems.filter((oneItem) => oneItem.id !== id);

  localStorage.setItem(cart, JSON.stringify(result));
  return result;
};
export const clearCart = () => {
  localStorage.setItem(cart, JSON.stringify([]));
  return [];
};

export const getLocalStorageCart = () => {
  return localStorage.getItem(cart) ? JSON.parse(localStorage.getItem(cart)) : [];
};

export const calculateTotalPrice = (listItems) => {
  return listItems.reduce((currentPrice, item) => currentPrice + item.price * item.quantity, 0);
};

export const calculateTotalNumbers = (listItems) => {
  return listItems.reduce((currentNumber, item) => currentNumber + item.quantity, 0);
};
