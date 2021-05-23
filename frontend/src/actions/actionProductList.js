import axios from 'axios';

const productsListAction =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCTS_LIST_REQUEST' });

      const { data } = await axios.get(`/api/products?keyword=${keyword}`);

      dispatch({
        type: 'PRODUCTS_LIST_SUCCESS',
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: 'PRODUCTS_LIST_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export default productsListAction;
