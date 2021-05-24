import axios from 'axios';
import {
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILURE
} from '../constants/productConstants';

const productTopAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);
    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: { data }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_TOP_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      }
    });
  }
};
export default productTopAction;
