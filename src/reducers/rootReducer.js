import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recordsReducer from './recordsReducer';

export default combineReducers({
  authReducer,
  recordsReducer
});
