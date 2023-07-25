import { createContext, useEffect, useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [selectedRow, setSelectedRow] = useState("");


  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function PhoneSignin(phone, appVerifier) {
    console.log(phone, appVerifier);
    const PhoneAuthentication = signInWithPhoneNumber(auth, phone, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
      console.log(error);
    });
    return PhoneAuthentication;
  }

  // function UserDetails(selectedRow){
  //   return selectedRow;
  // }

  // function generateRecaptchaVerifier() {
  //   return new RecaptchaVerifier("recaptcha-container");
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, PhoneSignin, selectedRow, setSelectedRow }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
