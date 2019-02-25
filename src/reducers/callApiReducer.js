import { CALL_API } from '../actions/actionTypes';

const initialState = {
  records: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CALL_API:
      console.log(action.data.data);
      return { ...state, records: action.data.data };
    default: return state;
  }
};
