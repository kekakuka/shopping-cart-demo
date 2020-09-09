export const addToCart = (listItems, product) => {
  console.log(listItems, product);
  if (listItems.find((oneItem) => oneItem.id === product.id)) {
    return listItems.map((oneItem) => {
      if (oneItem.id === product.id) {
        return { ...oneItem, quantity: oneItem.quantity + 1 };
      }
      return oneItem;
    });
  } else {
    return [...listItems, { ...product, quantity: 1 }];
  }
};
export const removeFromCart = (listItems, id) => {
  return listItems.filter((oneItem) => oneItem !== id);
};
export const clearCart = () => {
  return [];
};

export const calculateTotalPrice = (listItems) => {
  return listItems.reduce((currentPrice, item) => currentPrice + item.price * item.quantity, 0);
};
