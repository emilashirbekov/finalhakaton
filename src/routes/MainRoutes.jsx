import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DeliverPage from "../pages/DeliverPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import CourierPage from "../pages/CourierPage/CourierList/CourierPage";
import CourierProfile from "../pages/CourierPage/CourierProfile/CourierProfile";
import CourierHistory from "../pages/CourierPage/CourierHistory/CourierHistory";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserProfilePage />} />
        </Route>
        <Route path="/courier_history" element={<CourierHistory />} />
        <Route path="/courier" element={<CourierPage />} />
        <Route path="/courier_profile" element={<CourierProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/deliver" element={<DeliverPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
