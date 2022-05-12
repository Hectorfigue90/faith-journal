import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import {  legacy_createStore as createStore } from "redux";
import handleCarousel from "./redux/reducer";

import App from './App';

const store = createStore(handleCarousel);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>,
);

