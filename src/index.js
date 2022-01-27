import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

import "../src/assets/style/custom.scss";
import GridProvider from "./state/GridProvider";

ReactDOM.render(
  <React.StrictMode>
    <GridProvider>
      <App />
    </GridProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
