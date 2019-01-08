import React from "react";
import ReactDOM from "react-dom";
import { Provider, Button } from "reakit";
import theme from "reakit-theme-default";

const App = () => (
  <Provider theme={theme}>
    <Button>Button</Button>
  </Provider>
);

//ReactDOM.render(<App />, document.getElementById("root"));