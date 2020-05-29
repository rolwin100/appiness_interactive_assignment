export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULLFILLED = 'GET_USERS_FULLFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

export const getUsers = () => ({
  type: GET_USERS,
});
export const getUsersPending = () => ({
  type: GET_USERS_PENDING,
});

export const getusersFullfilled = (data) => ({
  type: GET_USERS_FULLFILLED,
  data,
});

export const getUsersRejected = (error) => ({
  type: GET_USERS_REJECTED,
  error,
});
