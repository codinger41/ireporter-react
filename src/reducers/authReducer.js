import {
  SIGN_UP, SIGN_IN, CURRENT_USER, LOGOUT
} from '../actions/actionTypes';

const initialState = {
  user: {},
  isLoggedIn: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return { user: action.user, isLoggedIn: true };
    case SIGN_IN:
      return { user: action.user, isLoggedIn: true };
    case CURRENT_USER:
      return { user: action.user, isLoggedIn: true };
    case LOGOUT:
      return { user: {}, isLoggedIn: false };
    default: return state;
  }
};
