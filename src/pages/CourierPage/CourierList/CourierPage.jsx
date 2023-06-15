import React, { useEffect, useState } from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";
import { Pagination } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import { useAdmin } from "../../../context/AdminContextProvider";
import { useOrder } from "../../../context/OrderContextProvider";
import { Box } from "@mui/system";

const CourierPage = () => {
  const { getDeliveries, deliveries_true, changeInWay } = useAdmin();
  const { pageTotalCount, orders, getOrders } = useOrder();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: 1,
      _limit: 3,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: 1,
      _limit: 3,
    });
  }, [page]);

  useEffect(() => {
    getOrders();
  }, [searchParams]);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  return (
    <div>
      <CourierNavbar />
      {orders.map((item) => (
        <CourierCard item={item} key={item.id} />
      ))}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={page}
          count={pageTotalCount}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </div>
  );
};

export default CourierPage;
