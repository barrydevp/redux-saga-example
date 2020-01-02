/*eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { counterTypes } from "./store/actionTypes"

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onIncrementRandomAsync }) => (
  <div>
    <button onClick={onIncrementRandomAsync}>Increment random after 1 second</button>{" "}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

// export default Counter;

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = {
  onIncrement: () => ({ type: counterTypes.INCREMENT }),
  onDecrement: () => ({ type: counterTypes.DECREMENT }),
  onIncrementAsync: () => ({ type: counterTypes.INCREMENT_ASYNC }),
  onIncrementRandomAsync: () => ({ type: counterTypes.INCREMENT_RANDOM_ASYNC }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
