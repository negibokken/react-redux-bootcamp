import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  increment() {
    const num = this.state.num + 1;
    this.setState({ num: num });
  }
  decrement() {
    const num = this.state.num - 1;
    this.setState({ num: num });
  }
  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default App;
