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

describe('getSingleRecord()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        record: [
          {
            comment: 'comment should be here.',
            location: 'location should be here also.'
          }
        ]
      }
    ]
  };

  it('should create a record successfully', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.getSingleRecord(1, 'red-flag')(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.SINGLE_RECORD);
  });
});

describe('editRecord()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        record: [
          {
            comment: 'comment should be here.',
            location: 'location should be here also.'
          }
        ]
      }
    ]
  };

  it('should edit a record successfully', async () => {
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.editRecord(1, 'red-flag', {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.EDIT_RECORD);
  });
});


describe('deleteRecord()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        record: [
          {
            comment: 'comment should be here.',
            location: 'location should be here also.'
          }
        ]
      }
    ]
  };

  it('should delete a record successfully', async () => {
    mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.deleteRecord(1, 'red-flag')(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.DELETE_RECORD);
  });
});
