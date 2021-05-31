import * as constants from './authConstants';

const initialState = {
  isAuth: false,
  user: {},
  loading: false,
  error: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOGIN_START:
    case constants.REGISTER_START:
    case constants.FORGOT_PASSWORD_START:
    case constants.RESET_PASSWORD_START:
      return { ...state, loading: true, error: null };

    case constants.LOGIN_SUCCESS:
    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        loading: false,
        error: null
      };
    case constants.FORGOT_PASSWORD_SUCCESS:
    case constants.RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false, error: null };

    case constants.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: {},
        isAuth: false
      };
    case constants.LOGIN_FAILURE:
    case constants.REGISTER_FAILURE:
    case constants.FORGOT_PASSWORD_FAILURE:
    case constants.RESET_PASSWORD_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};

export default authReducer;
