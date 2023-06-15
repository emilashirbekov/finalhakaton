import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API_ORDERS } from "../helpers/const";

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);

const INIT_STATE = {
  orders: [],
  pageTotalCount: 1,
};

const LIMIT = 5;
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "GET_PAGE":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const getAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
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
      const res = await axios.get(
        `${API_ORDERS}${
          window.location.search || window.location.search || `?_limit=${LIMIT}`
        }`,
        config
      );
      console.log(res.headers["x-total-count"]);
      const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);
      dispatch({
        type: "GET_ORDERS",
        payload: res.data,
      });

      dispatch({
        type: "GET_PAGE",
        payload: totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addOrder = async (newOrder) => {
    try {
      const config = getAuth();
      const res = await axios.post(`${API_ORDERS}`, newOrder, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    orders: state.orders,
    getOrders,
    addOrder,
    pageTotalCount: state.pageTotalCount,
  };
  console.log(values.orders);

  return (
    <orderContext.Provider value={values}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
