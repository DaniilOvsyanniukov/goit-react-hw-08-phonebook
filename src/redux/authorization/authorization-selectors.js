const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsermail = (state) => state.auth.user.mail;

const authSelectors = {
  getIsLoggedIn,
  getUsermail,
};
export default authSelectors;
