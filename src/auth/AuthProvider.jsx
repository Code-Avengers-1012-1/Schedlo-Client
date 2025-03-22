/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [isAuthLoading, setIsAuthLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
  };

    // Sign in with Google
    const signInWithGoogle = () => {
      setLoading(true);
      const googleProvider = new GoogleAuthProvider(); // Create an instance
      return signInWithPopup(auth, googleProvider) // Pass the instance
        .then((result) => {
          setUser(result.user);
          setLoading(false);
          return result;
        })
        .catch((error) => {
          setLoading(false);
          throw error;
        });
    };
    

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user here --> ", user);
        setUser(user);
      } else {
        console.log("user siggned out");
        setUser(null)
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { signUp, signIn, user, logOut, signInWithGoogle, loading };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
