import React, { createContext, useEffect, useState } from 'react'



export  const AuthContext=  createContext()

function AuthContextProvider ({children}) {

let [token,setToken]=  useState(null)
useEffect(()=>{

  setToken(localStorage.getItem('myToken'))
},[])

  return (
    
    <AuthContext.Provider value={{token:token,setToken:setToken}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider 
