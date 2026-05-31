import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../../../config/axiosInstance"


export let loginThunk = createAsyncThunk("auth/login", async (credentials, thunkError) => {
    try {

        let res = await axiosInstance.post("auth/login", credentials)

        return res.data

    } catch (error) {
        return thunkError.rejectWithValue("error in login Thunk-->", error)
    }
})



