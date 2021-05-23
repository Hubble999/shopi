import axios from 'axios';

export default (id) => (dispatch) => {
  dispatch({ type: 'PRODUCT_DETAILS_REQUEST' });

  axios
    .get(`/api/products/${id}`)
    .then((res) => {
      dispatch({
        type: 'PRODUCT_DETAILS_SUCCESS',
        payload: { data: res.data }
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: 'PRODUCT_DETAILS_FAILURE',
        payload: { error: err.message }
      });
    });
};
