import { createAsyncThunk } from "@reduxjs/toolkit";
import { cinemaService } from "../../core/service/cinema.service";

export const getCinemaGroupList = createAsyncThunk(
  "cinema/getCinemaGroupList",
  async (cinemaSystemID) => {
    const response = await cinemaService.getCinemaGroupList(cinemaSystemID);
    return response.data;
  }
);

export const getCinemaSystemList = createAsyncThunk(
  "cinema/getCinemaSystemList",
  async () => {
    const response = await cinemaService.getCinemaSystemList();
    return response.data;
  }
);
