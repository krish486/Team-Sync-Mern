import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/state/Slice/AuthSlice"
import themeReducer from "../shared/state/ThemeSlice"

export let store = configureStore(
    {
        reducer: {
            auth: authReducer,
            theme: themeReducer
        }
    }
);



