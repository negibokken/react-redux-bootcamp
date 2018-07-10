import * as React from "react";
import Num1 from "../Num1/Num1";
import Num10 from "../Num10/Num10";

export default class NumView extends React.Component {
  constructo() {}
  render() {
    return (
      <div>
        <Num10 num10={this.props.num10} />
        <Num1 num1={this.props.num1} />
      </div>
    );
  }
}
