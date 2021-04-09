import axios from 'axios';

export default (id) => (dispatch) => {
  dispatch({ type: 'PRODUCT_REQUEST' });

  axios.get(`/api/products/${id}`)
    .then((res) => {
      dispatch({ type: 'PRODUCT_SUCCESS', payload: { data: res.data } });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: 'PRODUCT_FAILURE', payload: { error: err.message } });
    });
};
