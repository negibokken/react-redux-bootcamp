import React, { Component } from "react";
import NumView from "../NumView/NumView";

class App extends Component {
  render() {
    return (
      <div>
        <NumView num10={this.props.num10} num1={this.props.num1} />
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default App;
