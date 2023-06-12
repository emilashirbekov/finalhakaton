import React, { createContext, useContext, useReducer, useEffect } from "react";
import { API_REGISTER } from "../helpers/const";
import axios from "axios";

//Создаем контект
const authContext = createContext();
//Создаем кастомный хук чтобы все получать значения из этого контекста
export const useAuth = () => useContext(authContext);

//В изначальных состояних, пользователей будет хранить в обьектах а так как ошибок изначально нет, то errors у нас null
const INIT_STATE = {
  users: {},
  error: "null",
};

//Задаем в state изначальное состояние, а action у нас говорит что нужно сделать при обновлении состояния
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //Отправляем наши данные на API на определенный эндпоинт
  const register = async (user) => {
    try {
      const res = await axios.post(`${API_REGISTER}/`, user);
      // console.log(`${API_REGISTER}/register/`);
      console.log(res);
    } catch (error) {
      console.log(error, "error");
      dispatch({
        type: "SET_ERROR",
        payload: error.response.data,
      });
    }
  };

  // const login = async (user) => {
  //   try {
  //     let res = await axios.post(`${API_REGISTER}/login/`, user);
  //     alert("Успех");
  //     localStorage.setItem("token", JSON.parse(res));
  //   } catch (error) {
  //     console.warn(error);
  //     dispatch({
  //       type: "SET_ERROR",
  //       payload: error.response.data,
  //     });
  //   }
  // };

  // const checkAuth = async () => {
  //   try {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     let res = await axios.post(`${API_REGISTER}/refresh`, {
  //       refresh: token.refresh,
  //     });
  //     localStorage.setItem("token", JSON.stringify(res));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     checkAuth();
  //   } else {
  //     navigate("/register");
  //   }
  // }, []);

  let values = { register };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
