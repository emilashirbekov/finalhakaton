import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DeliverPage from "../pages/DeliverPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/deliver" element={<DeliverPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
