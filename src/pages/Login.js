import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";

function Login({ location, isLogin, login }) {
  const redirect = location.state.redirect || "/";
  if (isLogin) {
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <p>ddd</p>
      <Button onClick={login}>登录</Button>
    </div>
  );
}

export default Login;
