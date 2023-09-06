import { configureStore } from "@reduxjs/toolkit";
import presRed from "./presRed.js";
import imobS from "./imobS.js";


const store = configureStore({
    reducer:{
        presses : presRed,
        imobs:imobS

    }}
)
export default store;