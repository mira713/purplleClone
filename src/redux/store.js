import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as AuthReducer } from './authCred/auth.reducer';
import {ProductReducer} from './product/prod.reducer';
import { SearchReducer } from './search/search.reducer';
import thunk from 'redux-thunk'
import { CartReducer } from "./cart/cart.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  SearchReducer,
  CartReducer,
});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))