import {
  CLEAR_ERRORS,
  EMAIL_SEND_FAILED,
  EMAIL_SEND_REQUEST,
  EMAIL_SEND_SUCCESS,
} from "../constants/userConstants";

export const sendEmail = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_SEND_REQUEST:
      return { ...state, loading: true, error: null };
    case EMAIL_SEND_SUCCESS:
      
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      };

    case EMAIL_SEND_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
