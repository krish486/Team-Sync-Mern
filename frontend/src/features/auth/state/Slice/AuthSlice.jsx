import { createSlice } from "@reduxjs/toolkit";


let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: true,
    },
    reducers: {
        addUser: (state, action) => {
            state.employee = action.payload
            state.isLoading = false
        },
        removeUser: (state) => {
            state.employee = null
        }
    }
})


let { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer