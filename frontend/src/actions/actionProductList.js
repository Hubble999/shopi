import axios from 'axios';
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE
} from '../constants/productConstants';

const productsListAction =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_LIST_REQUEST });

      const { data } = await axios.get(`/api/products?keyword=${keyword}`);

      dispatch({
        type: PRODUCTS_LIST_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_LIST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export default productsListAction;
