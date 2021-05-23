import axios from 'axios';

export default (id, amount) => (dispatch, getState) => {
  axios.get(`/api/products/${id}`).then((res) => {
    const { data } = res;
    const { _id, name, countInStock, image, price } = data;
    dispatch({
      type: 'ADD_CART',
      payload: {
        item: {
          id: _id,
          name,
          countInStock,
          image,
          price,
          amount
        }
      }
    });
    const { cartItems } = getState().cart;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });
};
