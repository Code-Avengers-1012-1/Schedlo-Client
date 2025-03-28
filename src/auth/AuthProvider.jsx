/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
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
    return signOut(auth);
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
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

  const signInWithGithub = async () => {
    setLoading(true);
    const githubProvider = new GithubAuthProvider(); // Create an instance
    return signInWithPopup(auth, githubProvider) // Pass the instance
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

  const signInWithFacebook = async () => {
    setLoading(true);
    const facebookProvider = new FacebookAuthProvider(); // Create an instance

    return signInWithPopup(auth, facebookProvider)
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
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    signUp,
    signIn,
    user,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    loading,
    signInWithFacebook,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
