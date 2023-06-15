import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { API_ORDERS } from "../helpers/const";

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);

const INIT_STATE = {
  orders: [],
  allorders: [],
};

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
      // const config = getAuth();
      const res = await axios(
        `http://localhost:7000/deliveriers/${window.location.search}`
      );
      const trued = res.data.filter((obj) => obj.adopted === "true");
      dispatch({ type: "GET_ORDERS", payload: trued });
      dispatch({
        type: "GET_TOTAL_PAGE",
        payload: Math.ceil(res.data.count / 6),
      });
      dispatch({ type: "GET_ALLORDERS", payload: res.data });
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

  const values = {
    orders: state.orders,
    getOrders,
    addOrder,
    allorders: state.allorders,
  };
  return (
    <orderContext.Provider value={values}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
