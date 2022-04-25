import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import 'normalize.css';
import './index.scss';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
