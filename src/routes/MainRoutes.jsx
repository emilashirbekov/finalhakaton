import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage/AdminPage";
import CourierPage from "../pages/CourierPage/CourierList/CourierPage";
import HomePage from "../pages/HomePage/HomePage";
import CourierProfile from "../pages/CourierPage/CourierProfile/CourierProfile";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        <Route path="/courier" element={<CourierPage />} />
        <Route path="/courier_profile" element={<CourierProfile />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
