import * as TYPES from '../action-type';

const cart = {
  add_to_cart(product) {
    return (dispatch) => {
      dispatch({
        type: TYPES.ADD_TO_CART,
        data: product,
      });
    };
  },
  remove_from_cart(id) {
    return (dispatch) => {
      dispatch({
        type: TYPES.REMOVE_FROM_CART,
        data: id,
      });
    };
  },
  clear_cart() {
    return (dispatch) => {
      dispatch({
        type: TYPES.CLEAR_CART,
      });
    };
  },
};

export default cart;
