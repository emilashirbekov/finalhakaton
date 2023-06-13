import axios from "axios";
import React, { createContext, useContext } from "react";
const courierContext = createContext();
export const useCourier = () => useContext(courierContext);
const API_ORDER = "http://34.125.1.54/";
const CourierContextProvider = ({ children }) => {
  const getOrders = async () => {
    try {
      let res = await axios(API_ORDER);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const acceptOrders = () => {};

  const values = { getOrders };
  return (
    <courierContext.Provider value={values}>{children}</courierContext.Provider>
  );
};

export default CourierContextProvider;
