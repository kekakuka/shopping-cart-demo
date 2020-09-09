import * as TYPES from '../action-type';
import { addToCart, removeFromCart, clearCart } from '../../utils/cartFunctions';
export default function cart(
  state = {
    listItems: [],
  },
  action
) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      state.listitems = addToCart(state.listItems, action.data);
      break;
    case TYPES.REMOVE_FROM_CART:
      state.listitems = removeFromCart(state.listItems, action.data);
      break;
    case TYPES.CLEAR_CART:
      state.listitems = clearCart();
      break;
    default:
      break;
  }
  return state;
}
