import { createSlice } from "@reduxjs/toolkit";

export const interndetailsSlice = createSlice({
  name: "interndetails",
  initialState: {
    interndetails: [],
  },
  reducers: {
    add: (state,action) => {
      state.interndetails.push(action.payload);
    },
    remove: (state,action) => {
      state.interndetails = state.interndetails.filter((_,i) => i !== action.payload);
    }
  },
});

export const { add,remove } = interndetailsSlice.actions;

export const selectInternDetails = (state) =>
  state.interndetails.interndetails;

export default interndetailsSlice.reducer;
