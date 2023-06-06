import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DeliverPage from "../pages/DeliverPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/deliver" element={<DeliverPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
