import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authenticationReducer from './authentication';
import postsReducer from './posts';

const authPersistConfig = {
  key: 'authentication',
  storage: storage,
  blacklist: ['authMode']
}

export default combineReducers({
  authentication: persistReducer(authPersistConfig, authenticationReducer),
  posts: postsReducer
})
