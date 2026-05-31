import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../Thunk/authLoginThunk";



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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.employee = action.payload;
                state.isLoading = false
            })
            .addCase(loginThunk.rejected, (state) => {
                console.log("extraReducers me reject hit hua hai");
                state.isLoading = false;    
            })
    }
})


let { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer