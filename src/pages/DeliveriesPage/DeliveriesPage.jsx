import React, { useEffect, useState } from "react";
import "./DeliveriesPage.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { Icon, IconButton } from "@mui/material";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useAdmin } from "../../context/AdminContextProvider";
const data = [
  { name: "the firs day", uv: 30 },
  { name: "the first week day", uv: 60 },
  { name: "the first month", uv: 350 },
];

const DeliveriesPage = () => {
  const {
    getCouriers,
    couriers,
    expectentions,
    deliveries,
    changeAdoptedDeli,
  } = useAdmin();

  useEffect(() => {
    getCouriers();
  }, []);
  console.log(expectentions, "2143");
  const renderLineChart = (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="blue" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div className="MainContain">
      <div className="MainContain__L">
        <div className="MainContain__Grapgh">{renderLineChart}</div>
      </div>
      <div className="MainContain__Right">
        <div className="MainContain__Right__item">
          <IconButton sx={{ color: "white" }}>
            <AirportShuttleIcon fontSize="large"></AirportShuttleIcon>
          </IconButton>
          <span className="MainContain__Right__item__span">
            Deliveries: {deliveries.length}
          </span>
        </div>
        <div className="MainContain__Right__item">
          <IconButton sx={{ color: "white" }}>
            <ScubaDivingIcon fontSize="large"></ScubaDivingIcon>
          </IconButton>
          <span className="MainContain__Right__item__span">
            Couriers : {couriers.length - expectentions}
          </span>
        </div>
        <div className="MainContain__Right__item">
          <IconButton sx={{ color: "white" }}>
            <NotificationImportantIcon fontSize="large"></NotificationImportantIcon>
          </IconButton>
          <span className="MainContain__Right__item__span">
            expectation : {expectentions}
          </span>
        </div>
        <div className="MainContain__Right__item">
          <IconButton sx={{ color: "white" }}>
            <LocalAtmIcon fontSize="large"></LocalAtmIcon>
          </IconButton>
          <span className="MainContain__Right__item__span">TotalSum : {4}</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveriesPage;
