export default (state = { data: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PRODUCT_DETAILS_SUCCESS': {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case 'PRODUCT_DETAILS_FAILURE': {
      const { error } = action.payload;
      return { state, error };
    }
    default:
      return state;
  }
};
