import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/AdminContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        {" "}
        <App />
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
