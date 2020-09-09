import * as TYPES from '../action-type';
import { toastr } from 'react-redux-toastr';
const cart = {
  add_to_cart(product) {
    toastr.success('Successfully', 'Add One Product');
    return {
      type: TYPES.ADD_TO_CART,
      data: product,
    };
  },
  remove_from_cart(id) {
    toastr.warning('Successfully', 'Remove from Cart');
    return {
      type: TYPES.REMOVE_FROM_CART,
      data: id,
    };
  },
  clear_cart() {
    toastr.warning('Successfully', 'Clear Cart');
    return {
      type: TYPES.CLEAR_CART,
    };
  },
};

export default cart;
