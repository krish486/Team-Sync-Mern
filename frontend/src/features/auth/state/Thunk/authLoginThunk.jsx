import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../../../config/axiosInstance"


export let loginThunk = createAsyncThunk("auth/login", async (credentials, thunkError) => {
    try {

        let res = await axiosInstance.post("auth/login", credentials)

        return res.data.data

    } catch (error) {
        return thunkError.rejectWithValue("error in login Thunk-->", error)
    }
})


export let getMeThunk = createAsyncThunk("auth/me", async (_, thunkAPI) => {
    try {

        let res = await axiosInstance.get("auth/me")

        return res.data.user

    } catch (error) {
        return thunkAPI.rejectWithValue("error in get me thunk", error)
    }
})