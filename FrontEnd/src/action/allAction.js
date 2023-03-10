import axios from "axios";
import {
  ALL_NOTICE_FAILD,
  ALL_NOTICE_REQUEST,
  ALL_NOTICE_SUCCESS,
  CLEAR_ERRORS,
  GET_TEACHERS_FAILD,
  GET_TEACHERS_REQUEST,
  GET_TEACHERS_SUCCESS,
} from "../constants/allConstants";

export const getAllNews = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTICE_REQUEST });
    const { data } = await axios.get("api/v1/news");
    dispatch({ type: ALL_NOTICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_NOTICE_FAILD, payload: error.response.data.error });
  }
};
export const getAllTeachers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEACHERS_REQUEST });
    const { data } = await axios.get("api/v1/teachers");
    dispatch({ type: GET_TEACHERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TEACHERS_FAILD, payload: error.response.data.error });
  }
};

// cleare Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
