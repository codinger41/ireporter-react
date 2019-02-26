import axios from 'axios';
import { SIGN_UP, SIGN_IN } from './actionTypes';

const apiUrl = 'http://localhost:4000';


export const signupUser = userData => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/auth/signup`, { ...userData });
      localStorage.setItem('token', data.data[0].token);
      dispatch({
        type: SIGN_UP,
        user: data.data[0].user
      })
      return data;
    } catch (error) {
      dispatch({
        type: SIGN_UP,
        user: {}
      })
      return error.response.data
    }
  }
}

export const signinUser = userData => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/auth/login`, { ...userData });
      localStorage.setItem('token', data.data[0].token);
      dispatch({
        type: SIGN_IN,
        user: data.data[0].user
      })
      return data;
    } catch (error) {
      dispatch({
        type: SIGN_IN,
        user: {}
      })
      return error.response.data
    }
  }
}
