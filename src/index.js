import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import authReducer from "./store/reducers/auth";
import professional from "./store/reducers/professional";
import bussiness from './store/reducers/bussiness'
import subBusiness from './store/reducers/subBusiness'

import category from './store/reducers/category'
import subCategory from './store/reducers/subCategory'
import country from './store/reducers/country'
import city from './store/reducers/city'

import customer from './store/reducers/customer'

import pages from './store/reducers/pages'
import subscription from './store/reducers/subscription'
import firstOrderDiscount from './store/reducers/firstOrderDiscount'
import adminUser from './store/reducers/adminUser'
import order from './store/reducers/order'
import report from './store/reducers/report'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  professional:professional,
  bussiness:bussiness,
  category:category,
  subCategory:subCategory,
  subBusiness:subBusiness,
  country:country,
  city:city,
  customer:customer,
  pages:pages,
  subscription:subscription,
  firstOrderDiscount:firstOrderDiscount,
  adminUser:adminUser,
  order:order,
  report:report
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
      
    <App /> 
  </Provider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
