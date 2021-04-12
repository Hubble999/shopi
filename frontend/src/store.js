import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsListReducer from './reducers/productsListReducer.js';
import productReducer from './reducers/productReducer.js';
import cartReducer from './reducers/cartReducer.js';

const reducer = combineReducers({
  products: productsListReducer,
  productDetails: productReducer,
  cart: cartReducer,
});
const initialCartState = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = { cart: { cartItems: initialCartState } };
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
