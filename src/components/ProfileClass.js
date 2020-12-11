import React from "react";
import { Button } from "antd";
class ProfileClass extends React.Component {
  showMessage = () => {
    alert("用户是" + this.props.user);
  };
  handleClick = () => {
    setTimeout(this.showMessage, 3 * 1000);
  };
  render() {
    return <Button onClick={this.handleClick}>查询</Button>;
  }
}
export default ProfileClass;
