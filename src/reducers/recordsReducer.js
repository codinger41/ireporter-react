import { MY_RECORDS } from '../actions/actionTypes';

const initialState = {
  myRecords: [],
  otherRecords: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MY_RECORDS:
      return { ...state, myRecords: action.records };
    default: return state;
  }
};
