import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage/AdminPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
