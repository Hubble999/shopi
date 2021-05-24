import { REMOVE_CART } from '../constants/cartConstants';

export default (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART, payload: { id } });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
