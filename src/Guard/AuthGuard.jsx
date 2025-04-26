import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthGuard({children}) {


  const token =localStorage.getItem('myToken')

  return<>
  {token?<Navigate to={''} />:children}
  
  
  </>
}
