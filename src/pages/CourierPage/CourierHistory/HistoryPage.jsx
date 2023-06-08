import React from "react";
import CourierHistory from "./CourierHistory";
import CourierNavbar from "../CourierNavbar";
import "./CourierHistory.css";
const HistoryPage = () => {
  return (
    <>
      {" "}
      <CourierNavbar />
      <div className="container_history">
        <CourierHistory />
        <CourierHistory />
        <CourierHistory />
        <CourierHistory />
      </div>
    </>
  );
};

export default HistoryPage;
