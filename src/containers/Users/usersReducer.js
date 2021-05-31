import * as constants from './usersConstants';

const initialState = {
  list: [],
  pagination: {},
  user: {},
  loading: true,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USERS_START:
      return { ...state, loading: true, error: null };
    case constants.GET_ONE_USER_START:
      return { ...state, loading: true, user: {}, error: null };

    case constants.GET_USERS_SUCCESS:
      return {
        ...state,
        list: payload.list,
        pagination: payload.pagination,
        loading: false,
        error: null
      };
    case constants.GET_ONE_USER_SUCCESS:
      return { ...state, user: payload.user, loading: false, error: null };

    case constants.GET_USERS_FAILURE:
    case constants.GET_ONE_USER_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};

export default userReducer;
