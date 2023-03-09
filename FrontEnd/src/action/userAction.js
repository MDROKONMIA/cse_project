import axios from "axios";
import {
  CLEAR_ERRORS,
  EMAIL_SEND_FAILED,
  EMAIL_SEND_REQUEST,
  EMAIL_SEND_SUCCESS,
} from "../constants/userConstants";

// Reset Password
export const sendEmail = (userData) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_SEND_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`/api/v1/sentmail`, userData, config);
    dispatch({ type: EMAIL_SEND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EMAIL_SEND_FAILED, payload: error.response.data.error });
  }
};

// cleare Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
