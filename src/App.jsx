import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Payment from "./components/payment";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
