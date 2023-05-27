import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config'



export const AuthContext = createContext(null)
const auth = getAuth(app)

function AuthProvider({ children }) {
// Store user data
    const [user, setUser] = useState([])
// Check data loading 
    const [loading, setLoading] = useState(true)
// Create user account
    const createUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
// sign in user
const login = (email,pass)=>{
    return signInWithEmailAndPassword(auth,email,pass)
}
// Logout user
const logOut = ()=>{
    return signOut(auth)
}

// Update user profile
const setProfile = (data)=>{
    return updateProfile(auth.currentUser,data)
}
// Auth status check
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user=>{
        setUser(user);
        setLoading(false)
    })
    return ()=> unsubscribe();
},[])
// pass data to children
    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        setProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider