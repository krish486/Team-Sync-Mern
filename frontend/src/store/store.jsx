import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/state/Slice/AuthSlice"

export let store = configureStore(
    {
        reducer: {
            auth: authReducer,
        }
    }
);



