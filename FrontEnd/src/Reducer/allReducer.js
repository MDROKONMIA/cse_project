import {
  ALL_NOTICE_FAILD,
  ALL_NOTICE_REQUEST,
  ALL_NOTICE_SUCCESS,
  CLEAR_ERRORS,
  GET_TEACHERS_FAILD,
  GET_TEACHERS_REQUEST,
  GET_TEACHERS_SUCCESS,
} from "../constants/allConstants";

export const getAllNews = (state = {}, action) => {
  switch (action.type) {
    case ALL_NOTICE_REQUEST:
      return { ...state, error: null, loading: true };
    case ALL_NOTICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        data: action.payload.data,
      };
    case ALL_NOTICE_FAILD:
      return { ...state, loading: false, error: action.payload.error };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
export const getAllTeachers = (state = {}, action) => {
  switch (action.type) {
    case GET_TEACHERS_REQUEST:
      return { ...state, error: null, loading: true };
    case GET_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        data: action.payload.data,
      };
    case GET_TEACHERS_FAILD:
      return { ...state, loading: false, error: action.payload.error };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
