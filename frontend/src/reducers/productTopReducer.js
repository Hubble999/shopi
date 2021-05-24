import {
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILURE
} from '../constants/productConstants';

const productTopReducer = (state = { data: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_TOP_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case PRODUCT_TOP_FAILURE: {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
};
export default productTopReducer;
