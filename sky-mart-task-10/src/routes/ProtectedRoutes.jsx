import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoutes = () => {

    const {logedInUser, registeredUsers} = useContext(Auth)

    if(!logedInUser){
        return <Navigate to={"/"} />
    }

  return <Outlet />
}

export default ProtectedRoutes
