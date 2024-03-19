import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Product from "./components/product";

const App = () => (
  <div>
    <Product />;
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
