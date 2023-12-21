import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popupaddintern",
  initialState: {
    popupaddintern: null,
  },
  reducers: {
    open: (state,action) => {
      state.popupaddintern = action.payload;
    },
    close: (state,action) => {
      state.popupaddintern = action.payload;
    },
  },
});

export const { open, close } = popupSlice.actions;

export const selectPopup = (state) =>
  state.popupaddintern.popupaddintern;

export default popupSlice.reducer;
