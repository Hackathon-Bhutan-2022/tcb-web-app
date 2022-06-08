import baseApi from '../utils/ApiUtils';

/**
 * Itinerary api
 * */
export const itineraryServices = (method, payload = null, params = null) => {
  return baseApi(`/itineraries`, method, params, payload).then(response => {
    return response.data;
  });
};

/**
 * Itinerary actions api
 * */
export const itineraryActions = (id, method, payload = null, params = null) => {
  return baseApi(`/itineraries/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};
