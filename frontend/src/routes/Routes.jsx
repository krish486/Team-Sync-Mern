import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../features/auth/UI/pages/Login'
import Register from '../features/auth/UI/pages/Register'
import MainLayout from '../Layout/MainLayout'
import Home from '../features/dashboard/UI/Pages/Home'
import PublicRoutes from '../protectedRoutes/PublicRoutes'
import ProtectedRoutes from '../protectedRoutes/ProtectedRoutes'

const Routes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoutes />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: "register",
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/home",
            element: <ProtectedRoutes />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        }
                    ]
                }
            ]
        }
    ])


    return (
        <RouterProvider router={router} />
    )
}

export default Routes
