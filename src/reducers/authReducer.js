import { SIGN_UP, SIGN_IN, CURRENT_USER, LOGOUT } from '../actions/actionTypes';

const initialState = {
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return { user: action.user };
    case SIGN_IN:
      return { user: action.user };
    case CURRENT_USER:
      return { user: action.user };
    case LOGOUT:
      return { user: {} };
    default: return state;
  }
};
