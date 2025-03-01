import * as types from "../Const/actionTypes";

const initialState = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user: null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isLoading: false,
  isCheckingAuth: false,
  message: null,
  error: null,
  notifications: [], //Types = "error", success", "info", "warning", "default"
};

const authReducer = (state = initialState, action) => {
  // console.log(action.type, state);
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
    case types.VERIFY_EMAIL_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return { ...state, isLoading: true, error: null };

    case types.LOGIN_SUCCESS:

      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        notifications: [
          ...state.notifications,
          { message: "Login successful!", type: "success" },
        ],
      };
    case types.SIGNUP_SUCCESS:
    case types.VERIFY_EMAIL_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        notifications: [
          ...state.notifications,
          { message: action.type, type: "success" },
        ],
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        notifications: [
          ...state.notifications,
          { message: "Loged out successfully!", type: "info" },
        ],
      };

    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
    case types.VERIFY_EMAIL_FAILURE:
    case types.CHECK_AUTH_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: action.payload,
        notifications: [
          ...state.notifications,
          { message: action.payload, type: "error" },
        ],
      };

    case types.FORGOT_PASSWORD_SUCCESS:
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        notifications: [
          ...state.notifications,
          { message: action.type, type: "success" },
        ],
      };

    case "CLEAR_NOTIFICATIONS":
      return { ...state, notifications: [] };

    default:
      return state;
  }
};

export default authReducer;
