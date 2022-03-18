
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from './ContextApi/ContextProvider';

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
