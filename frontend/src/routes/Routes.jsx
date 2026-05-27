import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../features/auth/UI/pages/Login'
import Register from '../features/auth/UI/pages/Register'
import MainLayout from '../Layout/MainLayout'
import Home from '../features/dashboard/UI/Pages/Home'

const Routes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
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
        },
        {
            path: "/home",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }
            ]
        }
    ])


    return (
        <RouterProvider router={router} />
    )
}

export default Routes
