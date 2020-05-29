import { GET_USERS_PENDING, GET_USERS_FULLFILLED, GET_USERS_REJECTED } from '../actions';

const users = (state = { pending: false, data: [], error: null }, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_USERS_FULLFILLED:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_USERS_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default users;
