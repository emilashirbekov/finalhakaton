import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const courierContext = createContext();
export const useCourier = () => useContext(courierContext);

const INIT_STATE = {
  couriers: [],
};

const getAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    header: {
      Authorization,
    },
  };
  return config;
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COURIER":
      return { ...state, couriers: action.payload };
  }
};

const CourierContextProvider = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCouriers = async () => {
    try {
      await axios(``);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};

export default CourierContextProvider;
