import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { API_ORDERS } from "../helpers/const";

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);
const LIMIT = 3;
const INIT_STATE = {
  orders: [],
  allorders: [],
  totalSum: 0,
  pageTotalCount: 1,
};
const API = "http://localhost:7000/deliveriers";
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "GET_ALLORDERS":
      return {
        ...state,
        allorders: action.payload,
      };
    case "GET_TOTALSUM":
      return {
        ...state,
        totalSum: action.payload,
      };
    case "PAGE_TOTAL_COUNT":
      return {
        ...state,
        pageTotalCount: action.payload,
      };
    default:
      return state;
  }
};

// const getAuth = () => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const Authorization = `Bearer ${token.access}`;
//   const config = {
//     headers: {
//       Authorization,
//     },
//   };
//   return config;
// };

const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getOrders = async () => {
    try {
      const res = await axios.get(
        `${API}${window.location.search || `?_limit=${LIMIT}`}`
      );
      const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);
      dispatch({
        type: "PAGE_TOTAL_COUNT",
        payload: totalPages,
      });
      dispatch({ type: "GET_ALLORDERS", payload: res.data });
      let d = res.data.reduce((total, item) => total + item.price, 0);
      dispatch({ type: "GET_TOTALSUM", payload: d });
      dispatch({
        type: "GET_ORDERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addOrder = async (newOrder) => {
    try {
      // const config = getAuth();
      await axios.post(`http://localhost:7000/deliveriers/`, newOrder);
    } catch (error) {
      console.log(error);
    }
  };
  async function changeAdoptedDeli(id, obj) {
    try {
      axios.patch(`http://localhost:7000/deliveriers/${id}`, obj);
      getOrders();
    } catch (error) {
      console.log(error);
    }
  }
  const values = {
    orders: state.orders,
    getOrders,
    addOrder,
    allorders: state.allorders,
    totalSum: state.totalSum,
    changeAdoptedDeli,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <orderContext.Provider value={values}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
