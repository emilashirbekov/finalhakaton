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
  deliveries_true: [],
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
    case "GET_DELIVERIES_TRUE": {
      return { ...state, deliveries_true: action.payload };
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
      const count = res.data.filter((obj) => obj.adopted === "false").length;
      const trued = res.data.filter((obj) => obj.adopted === "true");
      dispatch({
        type: "GET_EXPECTENTIONS",
        payload: count,
      });
      dispatch({ type: "GET_DELIVERIES_TRUE", payload: trued });
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

  async function addCouriers(newCourier) {
    try {
      await axios.post(`http://localhost:7000/couriers/`, newCourier);
      getCouriers();
    } catch (error) {
      console.log(error);
    }
  }

  async function changeAdopted(id, obj) {
    axios.patch(`http://localhost:7000/couriers/${id}`, obj);
    getCouriers();
  }
  // начало заказов
  async function sortUbiv(coutiers) {
    try {
      let d = coutiers.sort((a, b) => b.salary - a.salary);
      dispatch({ type: "GET_COURIERS", payload: d });
    } catch (error) {
      console.log(error, "sortubiv");
    }
  }
  async function sortUVozr(coutiers) {
    try {
      let d = coutiers.sort((a, b) => a.salary - b.salary);
      dispatch({ type: "GET_COURIERS", payload: d });
    } catch (error) {
      console.log(error, "sortubiv");
    }
  }
  async function getDeliveries() {
    try {
      let res = await axios.get("http://localhost:7000/deliveriers");
      const filteredData = res.data.filter((obj) => obj.adopted === "false");
      const trued = res.data.filter((obj) => obj.adopted === "true");
      dispatch({ type: "GET_DELIVERIES", payload: filteredData });
      dispatch({ type: "GET_DELIVERIES_TRUE", payload: trued });
    } catch (error) {
      console.log(error);
    }
  }

  async function changeInWay(id, obj) {
    axios.patch(`http://localhost:7000/couriers/${id}`, obj);
    getDeliveries();
  }
  let values = {
    getCouriers,
    changeInWay,
    couriers: state.couriers,
    addCouriers,
    deleteCouriers,
    changeAdopted,
    sortUbiv,
    sortUVozr,
    getDeliveries,
    deliveries: state.deliveries,
    // expect,
    expectentions: state.expectentions,
    deliveries_true: state.deliveries_true,
  };

  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default AdminContextProvider;
