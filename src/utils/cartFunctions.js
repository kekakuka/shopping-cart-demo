export const addToCart = (listItems, product) => {
  console.log(listItems, product);
  return listItems.map((oneItem) => {
    if (oneItem.id === product.id) {
      return { ...oneItem, quantity: oneItem.quantity + 1 };
    }
    return oneItem;
  });
};
export const removeFromCart = (listItems, id) => {
  return listItems.filter((oneItem) => oneItem !== id);
};
export const clearCart = () => {
  return [];
};
