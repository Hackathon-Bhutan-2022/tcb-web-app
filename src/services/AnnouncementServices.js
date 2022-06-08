import baseApi from '../utils/ApiUtils';

/**
 * Announcement api
 * */
export const announcementServices = (method, payload = null, params = null) => {
  return baseApi(`/announcements`, method, params, payload).then(response => {
    return response.data;
  });
};

/**
 * Announcement actions api
 * */
export const announcementActions = (id, method, payload = null, params = null) => {
  return baseApi(`/announcements/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};
