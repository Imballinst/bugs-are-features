import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Feature 3:
// This leads to the following error:
// Module '"/Users/tryajitiono/code/bug-is-a-feature/src/App"' has no default export.
// How to fix this?
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Feature 4: usually, this works fine and it renders to the page. However, it's not. What is wrong here?
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
