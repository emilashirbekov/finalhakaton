import axios from "axios";
import { async } from "q";
import React, { createContext, useContext, useReducer } from "react";
import { API_ORDERS } from "../helpers/const";

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

const CourierContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCouriers = async () => {
    try {
      await axios(``);
    } catch (error) {
      console.log(error);
    }
  };
  const GET_ORDER = async () => {
    try {
      let res = await axios.get(API_ORDERS);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  GET_ORDER();
  return <courierContext.Provider>{children}</courierContext.Provider>;
};

export default CourierContextProvider;
