import React, { useEffect, useState } from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";
import { Pagination } from "@mui/material";
import { useOrder } from "../../../context/OrderContextProvider";
import { useSearchParams } from "react-router-dom";

const CourierPage = () => {
  const { getOrders, orders, pageTotalCount } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <CourierNavbar />

      {orders.map((item, index) => (
        <CourierCard key={index} number={index + 1} item={item} />
      ))}

      <Pagination
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        page={page}
        count={4}
        onChange={(e, p) => setPage(p)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CourierPage;
