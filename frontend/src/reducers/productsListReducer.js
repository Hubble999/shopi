export default (state = { data: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case 'PRODUCTS_LIST_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PRODUCTS_LIST_SUCCESS': {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case 'PRODUCTS_LIST_FAILURE': {
      const { error } = action.payload;
      return { state, error };
    }
    default:
      return state;
  }
};
