import React from 'react'
import { useDispatch } from "react-redux"
import { toggleTheme } from '../../../../shared/state/ThemeSlice'

const Home = () => {
    let dispatch = useDispatch()

    let handleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <div>
            this is home page
            <button onClick={handleTheme}>change-Theme</button>
        </div>
    )
}

export default Home
