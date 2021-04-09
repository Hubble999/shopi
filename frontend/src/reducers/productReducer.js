export default (
  state = { data: null, loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case 'PRODUCT_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PRODUCT_SUCCESS': {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case 'PRODUCT_FAILURE': {
      const { error } = action.payload;
      return { state, error };
    }
    default:
      return state;
  }
};
