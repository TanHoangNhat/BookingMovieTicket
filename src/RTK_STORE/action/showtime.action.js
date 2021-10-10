import { createAsyncThunk } from "@reduxjs/toolkit";
import { GROUP_ID } from "../../core/global/constant";
import { showtimeService } from "../../core/service/showtime.service";
import { startLoading, stopLoading } from "../slice/common.slice";

export const getShowtimeListByCinemaSystem = createAsyncThunk(
  "showtime/getShowtimeListByCinemaSystem",
  async ({ cinemaSystemID, groupID = "GP01" }) => {
    try {
      const response = await showtimeService.getShowtimeByCinemaSystem(
        cinemaSystemID,
        groupID
      );
      return response.data[0];
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const getShowtimeListByMovie = createAsyncThunk(
  "showtime/getShowtimeListByMovie",
  async (movieID, { dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await showtimeService.getShowtimeByMovie(movieID);
      setTimeout(() => {
        dispatch(stopLoading());
      }, 1000);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
  }
);

export const getShowtimeInfo = createAsyncThunk(
  "showtime/getShowtimeInfo",
  async (showtimeID, { dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await showtimeService.getShowtimeInfo(showtimeID);
      setTimeout(() => {
        dispatch(stopLoading());
      }, 1000);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
  }
);
