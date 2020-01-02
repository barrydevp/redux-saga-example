import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import Counter from "./Counter";

const App = () => {
  // store.dispatch({ type: "counter/increment" })

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
store.subscribe(render);
