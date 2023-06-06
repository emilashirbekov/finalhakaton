import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API_AUTH } from "../helpers/const";

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);

const INIT_STATE = {
  orders: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
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

const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getOrders = async () => {
    try {
      const config = getAuth();
      const res = await axios(`${API_AUTH}/${window.location.search}`, config);
      dispatch({
        type: "GET_ORDERS",
        payload: res.data.results,
      });
      dispatch({
        type: "GET_TOTAL_PAGE",
        payload: Math.ceil(res.data.count / 6),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addOrder = async (newOrder) => {
    try {
      const config = getAuth();
      const res = await axios.post(`${API_AUTH}/orders/`, newOrder, config);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    orders: state.orders,
    getOrders,
    addOrder,
  };
  return (
    <orderContext.Provider value={values}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
