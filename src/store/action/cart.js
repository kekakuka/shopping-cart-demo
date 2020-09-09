import * as TYPES from '../action-type';

const cart = {
  add_to_cart(product) {
    return {
      type: TYPES.ADD_TO_CART,
      data: product,
    };
  },
  remove_from_cart(id) {
    return {
      type: TYPES.REMOVE_FROM_CART,
      data: id,
    };
  },
  clear_cart() {
    return {
      type: TYPES.CLEAR_CART,
    };
  },
};

export default cart;
