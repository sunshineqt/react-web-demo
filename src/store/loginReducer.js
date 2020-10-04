const initalUserInfo = {
  isLogin: false,
  user: { name: null },
};
export function loginReducer(state = { ...initalUserInfo }, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        user: { name: "xss" },
      };
    case "LOGOUT_SUCCESS":
      return {
        isLogin: false,
        user: { name: null },
      };
    default:
      return state;
  }
}
