import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num10: 0,
      num1: 0
    };
  }
  increment() {
    let num1 = this.state.num1;
    let num10 = this.state.num10;
    num1 = num1 + 1;
    if (num1 >= 10) {
      num10 = num10 + 1;
      num1 = 0;
    }
    this.setState({ num10: num10, num1: num1 });
  }
  decrement() {
    let num1 = this.state.num1;
    let num10 = this.state.num10;
    num1 = num1 - 1;
    if (num1 <= -1) {
      if (num10 > 0) {
        num10 = num10 - 1;
        num1 = 9;
      } else {
        num1 = 0;
      }
    }
    this.setState({ num10: num10, num1: num1 });
  }
  render() {
    return (
      <div>
        <div>{this.state.num10}</div>
        <div>{this.state.num1}</div>
        <br />
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default App;
