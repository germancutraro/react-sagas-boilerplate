/**
 * Archivo principal.
 * @module Index
 */

import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
// redux config
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { history, sagaMiddleware } from '@common/store';
import sagas from '@common/store/sagas';

const { persistor, store } = configureStore();
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
