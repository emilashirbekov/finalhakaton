import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage/AdminPage";
import CourierPage from "../pages/CourierPage/CourierPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        <Route path="/courier" element={<CourierPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
