import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import "./assets/queries.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import OrderContextProvider from "./context/OrderContextProvider";
import AdminContextProvider from "./context/AdminContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AdminContextProvider>
      <AuthContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </AuthContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
