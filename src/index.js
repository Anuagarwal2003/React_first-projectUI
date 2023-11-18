import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

store.subscribe(() => console.log(store.getstate()));

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <App />
  </Provider>
</React.StrictMode>
// document.getElementById("root");

)
 


