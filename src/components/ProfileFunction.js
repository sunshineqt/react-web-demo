import React from "react";
import { Button } from "antd";
const ProfileFunction = (props) => {
  const showMessage = () => {
    alert("用户是" + props.user);
  };
  const handleClick = () => {
    setTimeout(showMessage, 3 * 1000);
  };
  return <Button onClick={handleClick}>查询</Button>;
};
export default ProfileFunction;
