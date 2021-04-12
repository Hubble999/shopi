export default (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const { cartItems } = state;
      const { item } = action.payload;
      const isExistItem = cartItems.some((p) => p.id === item.id);
      if (isExistItem) {
        return {
          cartItems: cartItems.map((p) => (p.id === item.id ? item : p)),
        };
      }
      return { cartItems: [...cartItems, item] };
    }
    case 'REMOVE_CART': {
      const { cartItems } = state;
      const { id } = action.payload;
      const newItems = cartItems.filter((item) => item.id !== id);
      return { ...state, cartItems: newItems };
    }
    default:
      return state;
  }
};
