import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router"
import { store } from '../store/store'

const MainLayout = () => {
    let { theme } = useSelector(store => store.theme)
    useEffect(() => {
        if (theme === "light")
            document.body.classList.add("light");
        else
            document.body.classList.remove("light")
    }, [theme])
    return (
        <div>
            nav bar here
            <Outlet />
        </div>
    )
}

export default MainLayout
