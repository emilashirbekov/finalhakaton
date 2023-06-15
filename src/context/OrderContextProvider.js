import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { API_ORDERS } from "../helpers/const";

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);
const LIMIT = 5;
const INIT_STATE = {
  orders: [],
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
    case "GET_PAGE":
      return { ...state, pageTotalCount: action.payload };
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
      let res = await axios(
        `${API}${window.location.search || `?_limit=${LIMIT}`}`
      );
      const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);
      const trued = res.data.filter((obj) => obj.adopted === "true");

      console.log(res.headers);
      dispatch({ type: "GET_ORDERS", payload: trued });
      dispatch({
        type: "GET_PAGE",
        payload: totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

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
    pageTotalCount: state.pageTotalCount,
  };
  console.log(values.pageTotalCount);
  return (
    <orderContext.Provider value={values}>{children}</orderContext.Provider>
  );
};

export default OrderContextProvider;
