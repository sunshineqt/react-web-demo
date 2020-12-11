import React from "react";
import { Divider } from "antd";

import ProfileFunction from "../components/ProfileFunction";
import ProfileClass from "../components/ProfileClass";

export default class FuncClassComp extends React.Component {
  state = {
    user: "小明",
  };
  render() {
    return (
      <div>
        <Divider />
        <select
          value={this.state.user}
          onChange={(e) => this.setState({ user: e.target.value })}
        >
          <option value="小明">Dan</option>
          <option value="小白">Sophie</option>
          <option value="小黄">Sunil</option>
        </select>
        <Divider />
        <div>
          <b>funciton组件：</b>
          <ProfileFunction user={this.state.user} />
        </div>
        <Divider />
        <div>
          <b>calss组件：</b>
          <ProfileClass user={this.state.user} />
        </div>
      </div>
    );
  }
}

// 测试class组件与function组件在快速切换选择框时显示的内容问题
