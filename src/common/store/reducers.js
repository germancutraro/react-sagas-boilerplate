import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from '@containers/Auth/authReducer';
import usersReducer from '@containers/Users/usersReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isAuth']
};

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer,
    router: connectRouter(history)
  });
