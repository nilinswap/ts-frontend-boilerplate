"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
axios_1["default"].defaults.baseURL = "http://localhost:3000";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1["default"], null))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
