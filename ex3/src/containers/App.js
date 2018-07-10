import App from "../components/App/App";
import { connect } from "react-redux";

import { increment, decrement } from "../actions/calc";

const mapStateToProps = state => {
  return { num10: state.num10, num1: state.num1 };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
