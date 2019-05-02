/* eslint-disable prefer-promise-reject-errors */
import mockAxios from 'axios';
import * as actions from '../../../src/actions/records';
import * as types from '../../../src/actions/actionTypes';

describe('createRecord()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        record: {
          comment: 'comment should be here.',
          location: 'location should be here also.'
        }
      }
    ]
  };

  it('should create a record successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.createRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.CREATE_RECORD);
  });
});

describe('getMyRecords()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        records: [
          {
            comment: 'comment should be here.',
            location: 'location should be here also.'
          }
        ]
      }
    ]
  };

  it('should create a record successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.getMyRecords()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.MY_RECORDS);
  });
});
