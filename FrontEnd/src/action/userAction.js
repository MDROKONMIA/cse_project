import { CLEAR_ERRORS,
   RESET_PASSWORD_FAIL, 
   RESET_PASSWORD_REQUEST, 
   RESET_PASSWORD_SUCCESS } from "../constants/userConstants";

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config
    );
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response.data.error });

  }
};
// cleare Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORSR_ERRORS });
};
