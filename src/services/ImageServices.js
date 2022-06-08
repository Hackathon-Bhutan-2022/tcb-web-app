import baseApi from '../utils/ApiUtils';

/**
 * Users action api
 * */
export const imageServices = (payload = null) => {
  return baseApi(`/pictures`, 'post', null, payload).then(response => {
    return response.data;
  });
};
