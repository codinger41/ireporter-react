import { toast } from 'react-toastify';
import { SUCCESS_TOAST, FAILURE_TOAST } from './actionTypes';

export const successToast = message => (dispatch) => {
  dispatch({
    type: SUCCESS_TOAST
  });
  toast.success(message);
};

export const failureToast = message => (dispatch) => {
  dispatch({
    type: FAILURE_TOAST
  });
  toast.error(message);
};
