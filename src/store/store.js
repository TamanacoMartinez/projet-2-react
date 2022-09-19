import { configureStore } from "@reduxjs/toolkit"; 
import auth from "../auth/store/authSlice"; 


// Attention !!!


export default configureStore({
    reducer:{
        auth, 
    },
});