import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: { isLoading: true },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const { startLoading, stopLoading } = commonSlice.actions;
export const { reducer: CommonReducer } = commonSlice;
