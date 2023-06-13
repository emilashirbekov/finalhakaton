import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { API_LOGIN, API_REGISTER } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

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
        users: action.payload,
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
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  //Отправляем наши данные на API на определенный эндпоинт
  const register = async (user) => {
    try {
      await axios.post(`${API_REGISTER}`, user);
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response.data,
      });
      setErrorMessage(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      let res = await axios.post(`${API_LOGIN}`, user);
      localStorage.setItem("token", JSON.stringify(res.data));
      if (user) {
        navigate("/");
      } else {
        alert("Что то пошло не так");
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response.data,
      });
    }
  };

  const checkAuth = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      let res = await axios.post(`http://34.16.134.60/api/v1/refresh/`, {
        refresh: token.refresh,
      });
      localStorage.setItem("token", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    } else {
      // navigate("/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  let values = {
    register,
    login,
    error: state.error,
    users: state.users,
    logout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
