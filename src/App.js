import React from 'react';

import { Provider, Button } from "reakit";
import theme from "reakit-theme-default";

const App = () => (
  <Provider theme={theme}>
    <Button>Button</Button>
  </Provider>
);

export default App;
