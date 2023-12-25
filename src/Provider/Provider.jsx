import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const Provider = ({ children }) => {
    
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app)

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)


  }



  const profileInfo = (userName, userImage) => {
   return updateProfile(auth.currentUser, {
      displayName: userName, photoURL: userImage
    })
  }


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      setLoading(false);

    });

    return () => {
      unsubscribe();
    }
  }, [])



  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    profileInfo,
    signIn,
    logOut,
    googleSignIn
  }
  console.log(user)
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};


export default Provider;