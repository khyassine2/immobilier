import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './projet/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import store from './projet/store'
import { Provider } from 'react-redux';
import App3 from './App3';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App3 />
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
