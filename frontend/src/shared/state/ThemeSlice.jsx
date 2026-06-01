import { createSlice } from "@reduxjs/toolkit";


let themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: localStorage.getItem("theme") || "dark"
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark"
            localStorage.setItem("theme", state.theme)
        }
    }
})

export let { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer