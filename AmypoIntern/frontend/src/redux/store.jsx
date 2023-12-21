import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice"
import interndetailsReducer from "./interndetailsSlice"
export default configureStore({
    reducer :{
        popupaddintern:popupReducer,
        interndetails:interndetailsReducer
    }
})