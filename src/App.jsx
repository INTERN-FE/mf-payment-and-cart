import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Payment from "./components/payment";
import Checkout from "./components/checkout";

const App = () => <Checkout/>;
ReactDOM.render(<App />, document.getElementById("app"));
