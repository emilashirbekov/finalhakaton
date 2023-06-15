import { AspectRatio, LocalLaundryService } from "@mui/icons-material";
import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
const adminContext = createContext();
export const useAdmin = () => useContext(adminContext);
const INIT_STATE = {
  isAdmin: false,
  deliveries: [],
  couriers: [],
  couriersTrue: [],
  expectentions: 0,
  pageTotalCount: 1,
  likes: 0,
  adopted: false,
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
    case "INCREMENT_LIKES": {
      return { ...state, likes: action.payload };
    }
    case "GET_COURIERSTRUE": {
      return { ...state, couriersTrue: action.payload };
    }
    case "PAGE_TOTAL_COUNT":
      return { ...state, pageTotalCount: action.payload };
    default: {
      return state;
    }
  }
}

const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCouriers() {
    try {
      let res = await axios.get("http://localhost:7000/couriers");
      dispatch({ type: "GET_COURIERS", payload: res.data });
      const count = res.data.filter((obj) => obj.adopted === "false").length;
      const acces = res.data.filter((obj) => obj.adopted === "true");
      dispatch({
        type: "GET_EXPECTENTIONS",
        payload: count,
      });
      dispatch({ type: "GET_COURIERSTRUE", payload: acces });
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteCouriers(id) {
    try {
      await axios.delete(`http://localhost:7000/couriers/${id}`);
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
  async function changeCouriers(id, obj) {
    try {
      axios.patch(`http://localhost:7000/couriers/${id}`, obj);
      getCouriers();
    } catch (error) {
      console.log(error);
    }
  }

  // deliveries
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
  async function changeAdoptedDeli(id, obj) {
    try {
      axios.patch(`http://localhost:7000/deliveriers/${id}`, obj);
      getDeliveries();
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteDeliveriers(id) {
    try {
      await axios.delete(`http://localhost:7000/deliveriers/${id}`);
      getDeliveries();
    } catch (error) {
      console.log(error);
    }
  }
  async function addCouriers(newCourier) {
    try {
      await axios.post(`http://localhost:7000/couriers/`, newCourier);
      getDeliveries();
    } catch (error) {
      console.log(error);
    }
  }

  async function incrementLikes(id) {
    try {
      const updatedCouriers = state.couriers.map((courier) => {
        if (courier.id === id) {
          return {
            ...courier,
            likes: courier.likes + 1,
          };
        }
        return courier;
      });

      await axios.patch(`http://localhost:7000/couriers/${id}`, {
        likes: updatedCouriers.find((courier) => courier.id === id).likes,
      });

      dispatch({ type: "INCREMENT_LIKES", payload: updatedCouriers });
    } catch (e) {
      console.log(e);
    }
  }

  let values = {
    getCouriers,
    couriers: state.couriers,
    deleteCouriers,
    changeAdopted,
    sortUbiv,
    sortUVozr,
    addCouriers,
    getDeliveries,
    changeAdoptedDeli,
    deliveries: state.deliveries,
    deleteDeliveriers,
    // expect,
    expectentions: state.expectentions,
    changeCouriers,
    couriersTrue: state.couriersTrue,
    pageTotalCount: state.pageTotalCount,
    incrementLikes,
  };
  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default AdminContextProvider;
