import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router"
import { store } from '../store/store'
import Sidebar from "../features/dashboard/UI/components/Sidebar"
import Navbar from "../features/dashboard/UI/components/Navbar"

const MainLayout = () => {
    let { theme } = useSelector(store => store.theme)
    useEffect(() => {
        if (theme === "light")
            document.body.classList.add("light");
        else
            document.body.classList.remove("light")
    }, [theme])
    return (
        <div className="h-screen flex bg-[var(--background)] text-[var(--text-primary)]">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};


export default MainLayout
