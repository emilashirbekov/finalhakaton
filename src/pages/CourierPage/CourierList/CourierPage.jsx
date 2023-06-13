import React, { useEffect } from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";
import { Pagination } from "@mui/material";
import { useCourier } from "../../../context/CourierContextProvider";

const CourierPage = () => {
  const { getOrders } = useCourier();
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div>
      <CourierNavbar />
      <CourierCard />
      <Pagination
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        count={10}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CourierPage;
