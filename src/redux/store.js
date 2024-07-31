// src/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducer/authReducer";
import { thunk } from "redux-thunk";
// import authReducer from './reducers/authReducer';
// import thunk from 'redux-thunk';
 
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
