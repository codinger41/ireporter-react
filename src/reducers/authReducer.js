import { SIGN_UP } from '../actions/actionTypes';

const initialState = {
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.user };
    default: return state;
  }
};
