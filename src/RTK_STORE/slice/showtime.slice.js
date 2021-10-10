import { createSlice } from "@reduxjs/toolkit";
import {
  getShowtimeInfo,
  getShowtimeListByCinemaSystem,
  getShowtimeListByMovie
} from "../action/showtime.action";

const initialState = {
  showtimeDetail: {},
  showtimeListBySystem: {},
  showtimeListByGroup: {},
  showtimeListByMovie: [],
  showtimeInfo: [],
  chairList: []
};

const showtimeSlice = createSlice({
  name: "showtime",
  initialState,
  reducers: {
    setShowtimeDetail: (state, { payload }) => {
      state.showtimeDetail = payload;
    },
    setSelectedChair: (state, { payload }) => {
      const selectedChair = state.chairList.find(
        (chair) => chair.maGhe === payload
      );
      const isSelected = selectedChair.selected;
      selectedChair.selected = !isSelected;
    },
    getShowtimeListByCinemaGroup: (state, { payload }) => {
      const list = state.showtimeListBySystem.lstCumRap.find(
        (group) => group.maCumRap === payload
      );
      state.showtimeListByGroup = list;
    }
  },
  extraReducers: {
    [getShowtimeInfo.fulfilled]: (state, { payload }) => {
      state.showtimeInfo = payload;
      state.chairList = payload.danhSachGhe;
    },
    [getShowtimeListByMovie.fulfilled]: (state, { payload }) => {
      state.showtimeListByMovie = payload;
    },
    [getShowtimeListByCinemaSystem.fulfilled]: (state, { payload }) => {
      state.showtimeListBySystem = payload;
    }
  }
});

export const {
  setShowtimeDetail,
  setSelectedChair,
  getShowtimeListByCinemaGroup
} = showtimeSlice.actions;
export const { reducer: ShowtimeReducer } = showtimeSlice;
