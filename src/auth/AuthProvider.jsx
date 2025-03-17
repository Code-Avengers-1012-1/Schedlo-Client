 /* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import auth from "../firebase/firebase.config"


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = { signUp };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
