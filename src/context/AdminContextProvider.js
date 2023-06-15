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
    case "INCREMENT_LIKES": {
      return { ...state, couriers: action.payload };
    }
    case "INCREMENT_RATING": {
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
      let d;
      for (let i = 0; i < res.data; i++) {
        if (res.data[i].adopted === "false") {
          dispatch({ type: "GET_DELIVERIES", payload: res.data });
        }
      }
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
  async function addRating(id, value) {
    try {
      const updatedCouriers = state.couriers.map((courier) => {
        if (courier.id === id) {
          return {
            ...courier,
            rating: value,
          };
        }
        return courier;
      });

      await axios.patch(`http://localhost:7000/couriers/${id}`, {
        rating: updatedCouriers.find((courier) => courier.id === id).rating,
      });

      dispatch({ type: "INCREMENT_RATING", payload: updatedCouriers });
    } catch (e) {
      console.warn(e);
    }
  }

  let values = {
    getCouriers,
    addRating,
    couriers: state.couriers,
    addCouriers,
    deleteCouriers,
    changeAdopted,
    incrementLikes,
    sortUbiv,
    sortUVozr,
    getDeliveries,
    deliveries: state.deliveries,
    expectentions: state.expectentions,
  };
  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default AdminContextProvider;
