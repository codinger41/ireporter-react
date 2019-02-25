import axios from 'axios';
import { CALL_API } from './actionTypes';

const apiUrl = 'http://ireporter-leks.herokuapp.com';


// export const callApi = options => dispatch => 
//   axios.post(`${apiUrl}/api/v1/red-flags`)
//     .then((res) => {
//       dispatch({
//         type: CALL_API,
//         data: res.data.data
//       });
//     });


export const callApi = options => {
  return async (dispatch) => {
    const { data } = await axios.get(`${apiUrl}/api/v1/red-flags`);
    dispatch({
      type: CALL_API,
      data
    })
    return data;
  }
}