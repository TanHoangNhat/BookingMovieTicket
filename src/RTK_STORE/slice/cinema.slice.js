import { createSlice } from "@reduxjs/toolkit";
import {
  getCinemaGroupList,
  getCinemaSystemList
} from "../action/cinema.action";

const initialState = {
  cinemaList: [],
  cinemaGroupList: [],
  cinemaSystemList: []
};

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    getCinemaList: (state, action) => {
      const cinemaList = state.cinemaGroupList.find(
        (group) => group.maCumRap === action.payload
      )?.danhSachRap;
      state.cinemaList = cinemaList;
    }
  },
  extraReducers: {
    [getCinemaGroupList.fulfilled]: (state, action) => {
      state.cinemaGroupList = action.payload;
    },
    [getCinemaSystemList.fulfilled]: (state, action) => {
      state.cinemaSystemList = action.payload;
    }
  }
});

export const { getCinemaList } = cinemaSlice.actions;
export const { reducer: CinemaReducer } = cinemaSlice;
