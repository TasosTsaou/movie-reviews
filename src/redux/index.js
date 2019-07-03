import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authentication', 'posts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  thunk
];

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return { store, persistor };
}
