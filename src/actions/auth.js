import axios from 'axios';
import { SIGN_UP, SIGN_IN, LOGOUT } from './actionTypes';


const apiUrl = process.env.API_URL;


export const signupUser = userData => async (dispatch) => {
  try {
    const { data } = await axios.post(`${apiUrl}/api/v1/auth/signup`, { ...userData });
    localStorage.setItem('token', data.data[0].token);
    dispatch({
      type: SIGN_UP,
      user: data.data[0].user,
      isLoggedIn: true
    });
    return data.data[0].user;
  } catch (error) {
    return error.response.data;
  }
};

export const signinUser = userData => async (dispatch) => {
  try {
    const { data } = await axios.post(`${apiUrl}/api/v1/auth/login`, { ...userData });
    localStorage.setItem('token', data.data[0].token);
    dispatch({
      type: SIGN_IN,
      user: data.data[0].user
    });
    return data.data[0].user;
  } catch (error) {
    return error.response.data;
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT,
    user: {}
  });
};
