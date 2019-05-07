import { MY_RECORDS, SINGLE_RECORD } from '../actions/actionTypes';

const initialState = {
  myRecords: [],
  otherRecords: [],
  singleRecord: {
    location: '',
    comment: '',
    type: ''
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MY_RECORDS:
      return { ...state, myRecords: action.records };
    case SINGLE_RECORD:
      return { ...state, singleRecord: action.record };
    default: return state;
  }
};
