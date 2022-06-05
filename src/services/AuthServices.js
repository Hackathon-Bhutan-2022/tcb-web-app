import baseApi from '../utils/ApiUtils';

const setAuthUser = (response, dispatch) => {
  const storage = localStorage;
  const token = response.headers['authorization'];
  storage.setItem('user', JSON.stringify(response.data));
  storage.setItem('token', JSON.stringify(token));
  dispatch({type: 'LOGIN', payload: response.data});
};

export const authServices = (method, url, payload, dispatch, params = null) => {
  return baseApi(url, method, params, payload).then(response => {
    if (response.data) {
      setAuthUser(response, dispatch);
    }
    return response.data;
  });
};

export const invitationServices = (method, payload, dispatch) => {
  return baseApi(`/users/invitation`, method, null, payload).then(response => {
    if (method === 'put') {
      setAuthUser(response, dispatch);
    }
    return response.data;
  });
};

/**
 * forgot password api
 * */
export const passwordServices = (method, payload = null, params = null) => {
  return baseApi(`/users/password`, method, params, payload).then(response => {
    return response.data;
  });
};

/**
 * resend otp api
 * */
export const otpServices = (payload = null) => {
  return baseApi('/resend_otp', 'put', null, payload).then(response => {
    return response.data;
  });
};

export const logout = (dispatch, navigate) => {
  return baseApi(`/users/sign_out`, 'delete').then(response => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch({type: 'AUDIO', payload: {isOpen: false, isPlaying: false, audioData: {}}});
    dispatch({type: 'LOGOUT'});
    return response;
  });
};
