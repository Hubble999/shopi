import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsListReducer from './reducers/productsListReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const reducer = combineReducers({
  products: productsListReducer,
  productDetails: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

const initialCartState = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialUserState = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: initialCartState },
  userLogin: { userInfo: initialUserState }
};
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
