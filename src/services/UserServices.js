import baseApi from '../utils/ApiUtils';

/**
 * Users api
 * */
export const usersServices = (method = 'get', params = null, payload = null) => {
  return baseApi('/users', method, params, payload).then(response => {
    return response.data;
  });
};

/**
 * Users action api
 * */
export const usersAction = (id, method = 'get', params = null, payload = null) => {
  return baseApi(`/users/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};

/**
 * Users activate api
 * */
export const usersActivate = (id, method = 'put', params = null, payload = null) => {
  return baseApi(`/users/${id}/activate`, method, params, payload).then(response => {
    return response.data;
  });
};
