import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/assets/style/custom.scss";
import GridProvider from "./state/GridProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GridProvider>
        <Routes>
          <Route path="/:id" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </GridProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
