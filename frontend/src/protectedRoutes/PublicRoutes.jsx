import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {

    let { isAuthenticated, isLoading } = useSelector(store => store.auth)

    if (isAuthenticated) {
        return <Navigate to={"/home"} />
    }
    if (isLoading) {
        return <h1>Loading.......</h1>
    }

    return (
        <Outlet />
    )
}

export default PublicRoutes
