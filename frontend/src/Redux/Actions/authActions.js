// authActions.js
import axios from "axios";
import * as types from "../Const/actionTypes";

const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "token"
// )}`;
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const signup = (email, password, name, navigate) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      email,
      password,
      name,
    });
    dispatch({ type: types.SIGNUP_SUCCESS, payload: response.data.user });
    setTimeout(() => {
      navigate("/login");
    }, 0);
  } catch (error) {
    dispatch({
      type: types.SIGNUP_FAILURE,
      payload: error.response?.data?.message || "Error signing up",
    });
  }
};

export const login = (email, password, navigate) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token, user } = response.data;

    localStorage.setItem("token", token);

    dispatch({ type: types.LOGIN_SUCCESS, payload: user, token });

    setTimeout(() => {
      navigate("/profile");
    }, 0);
  } catch (error) {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: error.response?.data?.message || "Error logging in",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: types.LOGOUT_SUCCESS });
};

export const verifyEmail = (code, navigate) => async (dispatch) => {
  dispatch({ type: types.VERIFY_EMAIL_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/verify-email`, { code });
    dispatch({ type: types.VERIFY_EMAIL_SUCCESS, payload: response.data.user });
    navigate("/profile");
  } catch (error) {
    dispatch({
      type: types.VERIFY_EMAIL_FAILURE,
      payload: error.response?.data?.message || "Error verifying email",
    });
  }
};

export const checkAuth = () => async (dispatch) => {
  dispatch({ type: types.CHECK_AUTH_REQUEST });
  try {
    const response = await axios.get(`${API_URL}/check-auth`);
    dispatch({ type: types.CHECK_AUTH_SUCCESS, payload: response.data.user });
  } catch (error) {
    dispatch({
      type: types.CHECK_AUTH_FAILURE,
      payload: error.response?.data?.message || "Error checking auth",
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: types.FORGOT_PASSWORD_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    dispatch({
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload:
        error.response?.data?.message || "Error sending reset password email",
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  dispatch({ type: types.RESET_PASSWORD_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, {
      password,
    });
    dispatch({
      type: types.RESET_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: types.RESET_PASSWORD_FAILURE,
      payload: error.response?.data?.message || "Error resetting password",
    });
  }
};

export const clearNotifications = () => ({
  type: "CLEAR_NOTIFICATIONS",
});
