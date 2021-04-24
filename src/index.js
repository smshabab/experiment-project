import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {watchAuth} from './store/sagas/index';
import {BrowserRouter} from 'react-router-dom';
import authReducer from './store/reducers/auth';

const composeEnhancers = process.env.NODE_ENV=== 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  root: rootReducer,
  auth: authReducer
});

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
