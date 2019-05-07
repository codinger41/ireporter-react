/* eslint-disable prefer-destructuring */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {
  CREATE_RECORD, MY_RECORDS, SINGLE_RECORD, EDIT_RECORD, DELETE_RECORD
} from './actionTypes';


const apiUrl = process.env.API_URL;

export const createRecord = (recordData, type) => async (dispatch) => {
  try {
    let url;
    if (type === 'red-flag') {
      url = `${apiUrl}/api/v1/red-flags`;
    } else {
      url = `${apiUrl}/api/v1/intervention`;
    }
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      url,
      { ...recordData },
      {
        headers: {
          'x-access-token': token
        }
      }
    );
    dispatch({
      type: CREATE_RECORD,
      record: data.data[0]
    });
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_RECORD,
      record: {}
    });
    return error.response.data;
  }
};

export const getMyRecords = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    let id;
    if (token) {
      const data = jwt.decode(token);
      id = data.id;
    }
    const { data } = await axios.get(
      `${apiUrl}/api/v1/myRecords?fieldName=createdby&fieldValue=${id}`,
      {
        headers: {
          'x-access-token': token
        }
      }
    );
    dispatch({
      type: MY_RECORDS,
      records: data.data
    });
    return data;
  } catch (error) {
    dispatch({
      type: MY_RECORDS,
      record: []
    });
    return error.response.data;
  }
};

export const getSingleRecord = (id, type) => async (dispatch) => {
  try {
    let url;
    if (type === 'red-flag') {
      url = `${apiUrl}/api/v1/red-flags/${id}`;
    } else {
      url = `${apiUrl}/api/v1/intervention/${id}`;
    }
    const { data } = await axios.get(url);
    dispatch({
      type: SINGLE_RECORD,
      record: data.data[0]
    });
    return data;
  } catch (error) {
    dispatch({
      type: SINGLE_RECORD,
      record: {}
    });
    return error.response.data;
  }
};

export const editRecord = (id, type, recordData) => async (dispatch) => {
  try {
    let url;
    let url2;
    if (type === 'red-flag') {
      url = `${apiUrl}/api/v1/red-flags/${id}/comment`;
      url2 = `${apiUrl}/api/v1/red-flags/${id}/location`;
    } else {
      url = `${apiUrl}/api/v1/intervention/${id}/comment`;
      url2 = `${apiUrl}/api/v1/intervention/${id}/location`;
    }
    const token = localStorage.getItem('token');
    const { data } = await axios.patch(url, { ...recordData }, {
      headers: {
        'x-access-token': token
      }
    });
    const { data: data2 } = await axios.patch(url2, { ...recordData }, {
      headers: {
        'x-access-token': token
      }
    });
    dispatch({
      type: EDIT_RECORD
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRecord = (id, type) => async (dispatch) => {
  try {
    let url;
    if (type === 'red-flag') {
      url = `${apiUrl}/api/v1/red-flags/${id}`;
    } else {
      url = `${apiUrl}/api/v1/intervention/${id}`;
    }
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(url, {
      headers: {
        'x-access-token': token
      }
    });
    dispatch({
      type: DELETE_RECORD
    });
    dispatch(getMyRecords());
    return data;
  } catch (error) {
    dispatch({
      type: DELETE_RECORD
    });
    return error.response.data;
  }
};
