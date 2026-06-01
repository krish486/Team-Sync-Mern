import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk, loginThunk } from "../Thunk/authLoginThunk";



let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: true,
        isAuthenticated: false
    },
    reducers: {
        addUser: (state, action) => {
            state.employee = action.payload
            state.isLoading = false
            state.isAuthenticated = true
        },
        removeUser: (state) => {
            state.employee = null
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.employee = action.payload;
                state.isAuthenticated = true
                state.isLoading = false
            })
            .addCase(loginThunk.rejected, (state) => {
                console.log("extraReducers me reject hit hua hai");
                state.isLoading = false;
                state.isAuthenticated = false
            })
            .addCase(getMeThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMeThunk.fulfilled, (state, action) => {
                state.employee = action.payload;
                state.isLoading = false
                state.isAuthenticated = true
            })
            .addCase(getMeThunk.rejected, (state) => {
                console.log("extraReducers me reject hit hua hai");
                state.isLoading = false;
            })
    }
})


let { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer