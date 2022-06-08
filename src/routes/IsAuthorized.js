export const isAuthorized = (role = {}, authorized = []) => {
  return authorized.some((value => role?.name === value));
};
