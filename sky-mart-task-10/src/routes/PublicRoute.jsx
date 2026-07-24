import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const PublicRoutes = () => {

    const {logedInUser, registeredUsers} = useContext(Auth)

    if(logedInUser){
        return <Navigate to={"/main"} />
    }

  return <Outlet />
}

export default PublicRoutes
