import axios from 'axios';
import { CREATE_RECORD, MY_RECORDS } from './actionTypes';

const apiUrl = 'http://localhost:4000';

export const createRecord = (recordData, type) => {
  return async (dispatch) => {
    try {
      let url;
      if(type === 'red-flag') {
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
      console.log(error.response.data)
      dispatch({
        type: CREATE_RECORD,
        record: {}
      })
      return error.response.data
    }
  }
}

export const getMyRecords = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(
        `${apiUrl}/api/v1/myRecords`,
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
      console.log(error.response.data)
      dispatch({
        type: MY_RECORDS,
        record: []
      })
      return error.response.data
    }
  }
}
