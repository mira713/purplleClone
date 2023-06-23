import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
// import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './authCred/auth.reducer';
import {ProductReducer} from './product/prod.reducer';
import { SearchReducer } from './search/search.reducer';
import thunk from 'redux-thunk'
// import { CartReducer, CartUpdateReducer } from "./CartReducer/CartReducer";
// import { AdminReducer, AdminProductReducer } from "./AdminReducer/AdminReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  SearchReducer
//   CartReducer,
//   CartUpdateReducer,
//   AdminReducer,
//   AdminProductReducer,
});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))