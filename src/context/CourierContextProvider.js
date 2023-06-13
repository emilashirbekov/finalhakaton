import axios from "axios";
import React, { createContext, useContext } from "react";
const courierContext = createContext();
export const useCourier = () => useContext(courierContext);
const API_COURIER = "http://34.16.134.60/api/v1/orders/";
const CourierContextProvider = ({ children }) => {
  const getOrders = async () => {
    try {
      let res = await axios(`${API_COURIER}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  getOrders();

  const acceptOrders = () => {};

  const values = {};
  return (
    <courierContext.Provider value={values}>{children}</courierContext.Provider>
  );
};

export default CourierContextProvider;
