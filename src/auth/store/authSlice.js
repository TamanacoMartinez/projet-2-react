import {createSlice} from "@reduxjs/toolkit";
import reducers from "./authReducers";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            email: "",
        },
     
    },
    reducers: reducers,
    
});

export const { updateEmail } = authSlice.actions;

export default authSlice.reducer;