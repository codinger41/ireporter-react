/* eslint-disable prefer-promise-reject-errors */
import mockAxios from 'axios';
import * as actions from '../../../src/actions/auth';
import * as types from '../../../src/actions/actionTypes';

const loggedInUser = {
  name: 'leksyib',
  username: 'andela-test',
  email: 'email@andela.com',
  isadmin: true
};

describe('signinUser()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        user: loggedInUser,
        token: 'secret_string'
      }
    ]
  };

  it('should login user successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.signinUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.SIGN_IN);
  });
});


describe('signupUser()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        user: loggedInUser,
        token: 'secret_string'
      }
    ]
  };

  it('should login user successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await actions.signupUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(types.SIGN_UP);
  });
});
