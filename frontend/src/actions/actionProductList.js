import axios from 'axios';

const productsListAction = () => (dispatch) => {
  dispatch({ type: 'PRODUCTS_LIST_REQUEST' });

  axios.get('/api/products').then((res) => {
    dispatch({
      type: 'PRODUCTS_LIST_SUCCESS',
      payload: { data: res.data },
    });
  });
};

export default productsListAction;
