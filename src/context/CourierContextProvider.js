import React, { createContext, useContext } from "react";
const courierContext = createContext();
export const useCourier = () => useContext(courierContext);
const CourierContextProvider = ({ children }) => {
  const getOrders = () => {};
  const acceptOrders = () => {};

  const values = {};
  return (
    <courierContext.Provider value={values}>{children}</courierContext.Provider>
  );
};

export default CourierContextProvider;
