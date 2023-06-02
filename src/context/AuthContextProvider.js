import React, { createContext, useContext } from "react";

//Создаем контект
const authContext = createContext();

//Создаем кастомный хук чтобы все получать значения из этого контекста
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  let values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
