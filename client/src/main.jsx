import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Adjusted import to match the correct path
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
