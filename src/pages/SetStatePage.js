import React from "react";
export default class SetStatePage extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    console.log("increment setState前的count", this.state.count); // 0
    this.setState({
      count: this.state.count + 1,
    });
    console.log("increment setState后的count", this.state.count); // 0
  };
  triple = () => {
    console.log("triple setState前的count", this.state.count); //1
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    console.log("triple setState后的count", this.state.count); //1
  };
  reduce = () => {
    setTimeout(() => {
      console.log("reduce setState前的count", this.state.count); //2
      this.setState({
        count: this.state.count - 1,
      });
      console.log("reduce setState后的count", this.state.count); //1
    }, 0);
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        count:{count}
        <button onClick={this.increment}>点我增加</button>
        <button onClick={this.triple}>点我增加三倍</button>
        <button onClick={this.reduce}>点我减少</button>
      </div>
    );
  }
}
