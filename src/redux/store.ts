import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from '../../node_modules/redux-thunk/es/index';

import userReducer from './reducer/usersReducers';

const rootReducer = combineReducers({
  users: userReducer,
});

//Типизация store
type AppRootReducer = typeof rootReducer;
export type RootState = ReturnType<AppRootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
export type AppDispatch = typeof store.dispatch;
