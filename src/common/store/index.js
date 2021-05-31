import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  collapsed: true
});

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function')
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware, loggerMiddleware),
  ...enhancers
);

export default () => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
