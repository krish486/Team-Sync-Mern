import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {

    let { isAuthenticated, isLoading } = useSelector(store => store.auth)

    if (!isAuthenticated) {
        return <Navigate to={"/"} />
    }
    if (isLoading) {
        return <h1>Loading.......</h1>
    }

    return (
        <Outlet />
    )
}

export default ProtectedRoutes
