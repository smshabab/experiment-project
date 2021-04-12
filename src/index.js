import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {watchAuth} from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV=== 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchAuth);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
