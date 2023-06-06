import { LocalLaundryService } from "@mui/icons-material";
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
const adminContext = createContext();
export const useAdmin = () => useContext(adminContext);
const INIT_STATE = {
  isAdmin: false,
  deliveries: [],
  couriers: [],
  expectentions: 0,
  user: "",
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "ISADMIN": {
      return { ...state, isAdmin: action.payload };
    }
    case "GET_DELIVERIES": {
      return { ...state, deliveries: action.payload };
    }
    case "GET_USER": {
      return { ...state, user: action.payload };
    }
    case "GET_EXPECTENTIONS": {
      return { ...state, expectentions: action.payload };
    }
    case "GET_COURIERS": {
      return { ...state, couriers: action.payload };
    }
    default: {
      return state;
    }
  }
}

const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getUser() {
    try {
      let res = JSON.parse(localStorage.getItem("token"));
      dispatch({ type: "GET_USER", payload: res });
    } catch (error) {}
  }

  async function getCouriers() {
    try {
      let res = await axios.get("http://localhost:7000/couriers");
      dispatch({ type: "GET_COURIERS", payload: res.data });
      const count = state.couriers.filter(
        (obj) => obj.adopted === "false"
      ).length;
      dispatch({
        type: "GET_EXPECTENTIONS",
        payload: count,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteCouriers(id) {
    try {
      await axios.delete(`http://localhost:7000/couriers/${id}`);
      getCouriers();
    } catch (error) {}
  }
  async function changeAdopted(id, obj) {
    axios.patch(`http://localhost:7000/couriers/${id}`, obj);
    getCouriers();
  }
  // начало заказов
  async function getDeliveries() {
    try {
      let res = await axios.get("http://localhost:7000/couriers");
      dispatch({ type: "GET_COURIERS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }
  let values = {
    getCouriers,
    couriers: state.couriers,
    deleteCouriers,
    changeAdopted,
    // expect,
    expectentions: state.expectentions,
  };
  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default AdminContextProvider;
