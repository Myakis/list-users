import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { render } from 'react-dom';

import App from './App';
import store from './redux/store';

import 'normalize.css';
import './index.scss';

//Реализация на react 18
const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

//Релизация на React < 18 (по ТЗ)
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
