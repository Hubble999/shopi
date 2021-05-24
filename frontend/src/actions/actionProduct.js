import axios from 'axios';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE
} from '../constants/productConstants';

export default (id) => (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });

  axios
    .get(`/api/products/${id}`)
    .then((res) => {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: { data: res.data }
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: PRODUCT_DETAILS_FAILURE,
        payload: { error: err.message }
      });
    });
};
