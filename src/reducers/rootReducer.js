import { combineReducers } from 'redux';
import callApiReducer from './callApiReducer';
import authReducer from './authReducer';


export default combineReducers({
  callApiReducer,
  authReducer
});
