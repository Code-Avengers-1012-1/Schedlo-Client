/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


  const authInfo = { name: "Drisso" };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
