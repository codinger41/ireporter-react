import recordsReducer from '../../../src/reducers/recordsReducer';
import { MY_RECORDS } from '../../../src/actions/actionTypes';

describe('MY_RECORDS', () => {
  test('get records reducer', () => {
    const initialState = {
      myRecords: [],
      otherRecords: []
    };
    const action = {
      type: MY_RECORDS,
      records: []
    };
    const expectedState = {
      myRecords: [],
      otherRecords: []
    };

    expect(recordsReducer(initialState, action)).toEqual(expectedState);
    expect(recordsReducer(initialState, {})).toEqual(expectedState);
  });
});
