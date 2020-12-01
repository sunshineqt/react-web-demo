import { login } from "./store/user";
import { connect } from "react-redux";

const PrivateRoute = connect((state) => ({
  isLogin: state.user.isLogin,
}))(function ({ component: Component, isLogin, ...rest }) {});

const Login = connect((state) => ({ isLogin: state.user.isLogin }), {
  login,
})(function ({ location, isLogin, login }) {});
