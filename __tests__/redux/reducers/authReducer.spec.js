import authReducer from '../../../src/reducers/authReducer';
import {
  SIGN_IN, SIGN_UP, CURRENT_USER, LOGOUT
} from '../../../src/actions/actionTypes';

describe('Auth reducer', () => {
  test('authenticate users', () => {
    const initialState = {
      user: {},
      isLoggedIn: false
    };
    const action = {
      type: SIGN_IN,
      user: { username: 'leksyib' }
    };
    const expectedState = {
      user: { username: 'leksyib' },
      isLoggedIn: true
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  test('CURRENT_USER users', () => {
    const initialState = {
      user: {},
      isLoggedIn: false
    };
    const action = {
      type: CURRENT_USER,
      user: { username: 'leksyib' }
    };
    const expectedState = {
      user: { username: 'leksyib' },
      isLoggedIn: true
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  test('SIGN_UP users', () => {
    const initialState = {
      user: {},
      isLoggedIn: false
    };
    const action = {
      type: SIGN_UP,
      user: { username: 'leksyib' }
    };
    const expectedState = {
      user: { username: 'leksyib' },
      isLoggedIn: true
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  test('LOGOUT users', () => {
    const initialState = {
      user: {},
      isLoggedIn: false
    };
    const action = {
      type: LOGOUT,
    };
    const expectedState = {
      user: {},
      isLoggedIn: false
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });
});
