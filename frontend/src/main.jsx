import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
