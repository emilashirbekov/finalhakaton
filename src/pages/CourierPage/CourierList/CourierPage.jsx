import React, { useEffect, useState } from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";
import { Pagination } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import { useAdmin } from "../../../context/AdminContextProvider";
import { useOrder } from "../../../context/OrderContextProvider";

const CourierPage = () => {
  const { getDeliveries, deliveries_true, changeInWay } = useAdmin();
  const { pageTotalCount, orders, getOrders } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDeliveries();
  }, []);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setSearchParams({
      page: page,
    });
  }, [page]);

  useEffect(() => {
    getOrders();
  }, [searchParams]);

  return (
    <div>
      <CourierNavbar />
      {orders.map((item) => (
        <CourierCard item={item} key={item.id} />
      ))}

      <Pagination
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        page={page}
        onChange={(e, p) => setPage(p)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CourierPage;
