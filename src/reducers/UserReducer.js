export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true, ...action.payload};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

const initialUser = {
  authenticated: false,
  token: JSON.parse(localStorage.getItem('token')),
  ...(JSON.parse(localStorage.getItem('user')) || {})
};
initialUser.authenticated = !!initialUser.token;
export {initialUser};
