import * as types from "../Const/actionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isCheckingAuth: false,
  message: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
    case types.VERIFY_EMAIL_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return { ...state, isLoading: true, error: null };

    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.VERIFY_EMAIL_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case types.LOGOUT_SUCCESS:
      return { ...state, user: null, isAuthenticated: false, isLoading: false };

    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
    case types.VERIFY_EMAIL_FAILURE:
    case types.CHECK_AUTH_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case types.FORGOT_PASSWORD_SUCCESS:
    case types.RESET_PASSWORD_SUCCESS:
      return { ...state, message: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
